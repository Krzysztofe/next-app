import { createPost } from "@/actions/actions";

const Form = () => {
  return (
    <form
      action={createPost}
      className="flex flex-col gap-4 max-w-[450px] mx-auto"
    >
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
  );
};

export default Form;
