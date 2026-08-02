import { Suspense } from "react";
import { PostList } from "../components/post-list";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList />
      </Suspense>
    </div>
  );
}
