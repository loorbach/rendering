import { Suspense, ViewTransition } from "react";
import { PostList } from "../components/post-list";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ViewTransition enter="slide-up">
          <PostList />
        </ViewTransition>
      </Suspense>
    </div>
  );
}
