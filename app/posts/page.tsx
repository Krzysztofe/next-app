import PostsList from "@/components/posts-list";
import { Suspense } from "react";
import LoadingPage from "./loading";

export default function PostsMain() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Lista Postów</h1>
      <Suspense fallback={<LoadingPage />}>
        <PostsList />
      </Suspense>
    </main>
  );
}
