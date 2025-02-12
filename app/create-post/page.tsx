import { createPost } from "@/actions/actions";
import Form from "@/components/form";
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

      <Form />

      <LogoutLink className="border border-zinc-800 px-2 py-1 mx-auto size-fit rounded block mt-6">
        Wyloguj
      </LogoutLink>
    </main>
  );
};

export default PageCreatePost;
