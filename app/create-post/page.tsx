import { createPost } from "@/actions/actions";

const PageCreatePost = () => {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Zapisz Post</h1>
      <form action={createPost}>
        <input
          type="text"
          name="title"
          placeholder="Tytuł"
          className="border rounted px-3"
        />
        <button className="text-white bg-blue-500 px-2 py-1 rounded ml-2">
          Zapisz
        </button>
      </form>
    </main>
  );
};

export default PageCreatePost;
