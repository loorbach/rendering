import { db } from "../db";
import { posts } from "../db/schema";

export async function PostList() {
  const allPosts = await db.select().from(posts);
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
