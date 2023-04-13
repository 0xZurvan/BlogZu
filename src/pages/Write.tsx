
import { useState } from "react";
import { useBlogStore } from "../stores/useBlogStore";
import { shallow } from "zustand/shallow";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const [createBlog] = useBlogStore(
    (state) => [state.createBlog],
    shallow
  );

  const handleCreateBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(title === "" || content === "" || category === "") return;

    await createBlog(title, content, category);

    setTitle("");
    setContent("");
    setCategory("");

  }

  return (
    <div className="max-w-screen-xl flex flex-col flex-wrap justify-center mx-[70px] space-y-10 my-10">
      <h1 className="max-w-2xl mb-4 text-2xl mx-auto font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white">
        Write a blog post
      </h1>
      <form onSubmit={handleCreateBlog} className="flex flex-col max-w-screen max-h-screen">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-white">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Write your title..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-white">
            Your message
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="block p-2.5 w-full h-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-white">
            Select an option
          </label>
          <select
            defaultValue="Choose an category"
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Choose an category">Choose an category</option>
            <option value="Article">Article</option>
            <option value="Tutorial">Tutorial</option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex w-32 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Publish post
        </button>
      </form>
    </div>
  )
}
