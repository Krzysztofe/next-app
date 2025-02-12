import { createPost } from "@/actions/actions";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const PageCreatePost = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/create-post");
  }

  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Zapisz Post</h1>
      <form action={createPost} className="flex flex-col gap-4 max-w-[450px] mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Tytuł"
          className="border rounted px-3"
        />
        <textarea
          name="body"
          placeholder="Opis"
          rows={6}
          className="border rounted px-3"
        />
        <button className="text-white bg-blue-500 px-2 py-1 rounded">
          Zapisz
        </button>
      </form>
      <LogoutLink className="border border-zinc-800 px-2 py-1 mx-auto size-fit rounded block mt-6">
        Wyloguj
      </LogoutLink>
    </main>
  );
};

export default PageCreatePost;
