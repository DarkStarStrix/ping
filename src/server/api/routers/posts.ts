import { z } from "zod";

import {
	createTRPCRouter,
	privateProcedure,
	publicProcedure,
} from "~/server/api/trpc";

import { TRPCError } from "@trpc/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create a ratelimiter that allows to post 2 requests per 1 minute
const postingRatelimit = new Ratelimit({
	redis: Redis.fromEnv(),
	limiter: Ratelimit.slidingWindow(2, "1 m"),
	analytics: true,
});

import { randomUUID } from "crypto";

const postPublicData = {
	likers: true,
	thread: true,
	author: {
		include: { flairs: true },
	},
	replies: {
		select: {
			_count: true,
		},
	},
	repliedTo: {
		select: {
			id: true,
			content: true,
			author: {
				select: {
					username: true,
					avatar_url: true,
					flairs: true,
					full_name: true,
					id: true,
				},
			},
		},
	},
};

export const postsRouter = createTRPCRouter({
	getAll: publicProcedure.query(async ({ ctx }) => {
		const posts = await ctx.prisma.post.findMany({
			take: 100,
			orderBy: [{ createdAt: "desc" }],
			include: postPublicData,
			where: { status: "Posted" },
		});

		return posts;
	}),

	find: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
		const posts = await ctx.prisma.post.findMany({
			take: 100,
			orderBy: [{ createdAt: "desc" }],
			include: postPublicData,
			where: { content: { contains: input } },
		});

		return posts;
	}),

	getAllInThread: publicProcedure
		.input(z.string())
		.query(async ({ ctx, input }) => {
			const posts = await ctx.prisma.post.findMany({
				take: 100,
				orderBy: [{ createdAt: "desc" }],
				include: postPublicData,
				where: {
					thread: { name: input },
					status: "Posted",
				},
			});

			return posts;
		}),

	getAllByThreadId: publicProcedure
		.input(z.string())
		.query(async ({ ctx, input }) => {
			const posts = await ctx.prisma.post.findMany({
				take: 100,
				orderBy: [{ createdAt: "desc" }],
				include: postPublicData,
				where: { threadId: input, status: "Posted" },
			});

			return posts;
		}),

	getById: publicProcedure
		.input(z.string().uuid())
		.query(async ({ ctx, input }) => {
			const post = await ctx.prisma.post.findUnique({
				where: { id: input },
				include: postPublicData,
			});

			if (!post) {
				throw new TRPCError({
					code: "NOT_FOUND",
					message: `Post with id ${input} was not found.`,
				});
			}

			if (post.status === "UserDeleted") {
				throw new TRPCError({
					code: "NOT_FOUND",
					message: "This twot was deleted by the user.",
					cause: "the user",
				});
			}

			if (post.status === "AdminDeleted") {
				throw new TRPCError({
					code: "NOT_FOUND",
					message: "This twot was deleted by the moderation team.",
					cause: "the moderation team",
				});
			}

			if (post.status === "Posted") {
				return post;
			}

			throw new TRPCError({
				code: "INTERNAL_SERVER_ERROR",
				message: "Something went wrong",
			});
		}),

	getRepliesById: publicProcedure
		.input(z.string().uuid())
		.query(async ({ ctx, input }) => {
			const replies = await ctx.prisma.post.findMany({
				take: 100,
				orderBy: [{ createdAt: "asc" }],
				include: postPublicData,
				where: { repliedToId: input, status: "Posted" },
			});

			if (!replies) {
				throw new TRPCError({
					code: "NOT_FOUND",
					message: `Replies for post ${input} were not found`,
				});
			}

			return replies;
		}),

	getAllByAuthorId: publicProcedure
		.input(z.string())
		.query(async ({ ctx, input }) => {
			const posts = await ctx.prisma.post.findMany({
				where: { authorId: input },
				include: postPublicData,
				take: 100,
				orderBy: [{ createdAt: "desc" }],
			});
			return posts;
		}),

	getAllByAuthorUsername: publicProcedure
		.input(z.string())
		.query(async ({ ctx, input }) => {
			const posts = await ctx.prisma.post.findMany({
				where: { author: { username: input } },
				include: postPublicData,
				take: 100,
				orderBy: [{ createdAt: "desc" }],
			});
			return posts;
		}),

	deleteById: privateProcedure
		.input(z.string())
		.mutation(async ({ ctx, input }) => {
			const post = await ctx.prisma.post.findUnique({
				where: { id: input },
			});

			if (!post) {
				throw new TRPCError({
					code: "NOT_FOUND",
					message: `Post with id ${input} was not found.`,
				});
			}

			if (post.authorId !== ctx.userId) {
				throw new TRPCError({
					code: "FORBIDDEN",
					message: "You are not allowed to delete this post.",
				});
			}

			await ctx.prisma.post.update({
				where: { id: input },
				data: { status: "UserDeleted" },
			});
		}),

	likeById: privateProcedure
		.input(z.string())
		.mutation(async ({ ctx, input }) => {
			const post = await ctx.prisma.post.findUnique({
				where: { id: input },
				select: {
					likers: {
						select: { id: true },
					},
				},
			});

			const profile = await ctx.prisma.profile.findUnique({
				where: { id: ctx.userId },
				select: { id: true },
			});

			if (!profile || !post) {
				throw new TRPCError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Post or Profile not found.",
				});
			}

			const isLiked = post.likers.find((liker) => liker.id === profile.id);

			if (isLiked) {
				await ctx.prisma.post.update({
					where: { id: input },
					data: {
						likers: { disconnect: { id: profile.id } },
					},
				});
			} else {
				await ctx.prisma.post.update({
					where: { id: input },
					data: {
						likers: {
							connect: [{ id: profile.id }],
						},
					},
				});
			}
		}),

	create: privateProcedure
		.input(
			z.object({
				content: z
					.string()
					.min(1, "Your twot must be longer")
					.max(300, "Your twot must be less than 300 characters long"),
				threadId: z.string().uuid(),
				repliedToId: z.string().uuid().optional(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const authorId = ctx.userId;

			const { success } = await postingRatelimit.limit(authorId ?? "");

			if (!success) {
				throw new TRPCError({ code: "TOO_MANY_REQUESTS" });
			}

			const id = randomUUID();
			const currentTime = new Date().toISOString();

			const post = await ctx.prisma.post.create({
				data: {
					id,
					authorId,
					threadId: input.threadId,
					content: input.content,
					createdAt: currentTime,
					updatedAt: currentTime,
					repliedToId: input.repliedToId,
				},
			});

			if (input.repliedToId) {
				await ctx.prisma.post.update({
					where: {
						id: input.repliedToId,
					},
					data: {
						replies: {
							connect: { id },
						},
					},
				});
			}

			return post;
		}),
});
