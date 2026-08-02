import { db } from "../db";
import { posts } from "../db/schema";
import { PostCard } from "./post-card";

export async function PostList() {
  const allPosts = await db.select().from(posts);

  return allPosts.map((post) => <PostCard key={post.id} post={post} />);
}
