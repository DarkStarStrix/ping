import { MetadataRoute } from "next";
import { Post } from "~/components/post/Post";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: "/", changefreq: "always", priority: 1 },
    { url: "/home", changefreq: "always", priority: 0.9 },
    { url: "/search", changefreq: "always", priority: 0.7 },
    { url: "/about", changefreq: "monthly", priority: 0.6 },
    { url: "/tos", changefreq: "monthly", priority: 0.4 },
  ];

  const res = await fetch("https://pingpad.io/api/posts/explore?type=curated&limit=50", { method: "GET" });
  if (!res.ok) throw new Error(res.statusText);

  const { data } = await res.json();
  const postPages = data.map((post: Post) => ({
    url: `/p/${post.id}`,
    changefreq: "hourly",
    priority: 0.6,
  }));

  return [...staticPages, ...postPages];
}
