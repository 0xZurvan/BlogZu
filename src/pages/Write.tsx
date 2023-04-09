export default function Write() {
  return (
    <div className="max-w-screen-xl flex flex-col flex-wrap justify-center mx-[70px] space-y-10 my-10">
      <h1 className="max-w-2xl mb-4 text-2xl mx-auto font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
        Write a blog post
      </h1>
      <form className="flex flex-col max-w-screen max-h-screen">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your message
          </label>
          <textarea
            id="message"
            className="block p-2.5 w-full h-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-flex w-32 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Publish post
        </button>

      </form>
    </div>
  );
}
