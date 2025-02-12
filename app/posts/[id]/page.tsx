import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

const SinglePost = async ({ params }: { params: { id: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main>
      <div className="text-center">Post</div>
      <div className="mb-5 text-center">
        <p className="mt-2 text-center">Tytuł: {post.title}</p>
        <p className="mt-2">Opis: {post.body}</p>
      </div>
    </main>
  );
};

export default SinglePost;
