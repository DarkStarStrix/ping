import { S3 } from "@aws-sdk/client-s3";
import type { AnyPublicationFragment, FeedItemFragment, PaginatedResult } from "@lens-protocol/client";
import { LimitType, PublicationType } from "@lens-protocol/client";
import type { NextRequest } from "next/server";
import { lensItemToPost } from "~/components/post/Post";
import { env } from "~/env.mjs";
import { getLensClient } from "~/utils/getLensClient";

const accessKeyId = env.STORAGE_ACCESS_KEY;
const secretAccessKey = env.STORAGE_SECRET_KEY;

const s3 = new S3({
  endpoint: "https://endpoint.4everland.co",
  credentials: { accessKeyId, secretAccessKey },
  region: "4EVERLAND",
});

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const cursor = searchParams.get("cursor");

  try {
    const { client, isAuthenticated, profileId } = await getLensClient();

    let data: PaginatedResult<FeedItemFragment> | PaginatedResult<AnyPublicationFragment>;
    if (isAuthenticated) {
      data = (await client.feed.fetch({ where: { for: profileId }, cursor })).unwrap();
    } else {
      data = await client.publication.fetchAll({
        where: { publicationTypes: [PublicationType.Post] },
        cursor,
        limit: LimitType.Ten,
      });
    }

    const posts = data.items.map(lensItemToPost);

    return new Response(JSON.stringify({ posts, nextCursor: data.pageInfo.next }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: `Failed to fetch posts: ${error.message}` }), { status: 500 });
  }
}

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);

  if (!data) {
    return new Response(JSON.stringify({ error: "Bad Request" }), { status: 400 });
  }


  if (data && data.length > 140 * 1024) {
    return new Response(JSON.stringify({ error: "Data too large" }), { status: 400 });
  }

  try {
    const { client, isAuthenticated, handle } = await getLensClient();

    if (!isAuthenticated) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });
    }

    const metadata = JSON.stringify(data);
    const date = new Date().toISOString();
    const key = `users/${handle}/${date}_metadata.json`;

    await s3.putObject({
      ContentType: "application/json",
      Bucket: "pingpad-ar",
      Body: metadata,
      Key: key,
    });

    const result = await s3.headObject({
      Bucket: "pingpad-ar",
      Key: key,
    });

    const cid = result.Metadata["ipfs-hash"];
    const contentURI = `ipfs://${cid}`;
    const post = await client.publication.postOnMomoka({ contentURI });

    if (post.isFailure()) {
      throw new Error(post.error.message);
    }

    return new Response("Success", { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: `Failed to create a post: ${error.message}` }), { status: 500 });
  }
}