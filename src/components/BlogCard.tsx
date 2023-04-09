export default function BlogCard() {
  return (
    <div>
      <article className="p-6 rounded-lg border shadow-md bg-gray-800 border-gray-700">
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
            Tutorial
          </span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
          <a href="#">How to quickly deploy a static website</a>
        </h2>
        <p className="mb-5 font-light text-gray-400">
          Static websites are now used to bootstrap lots of websites and are
          becoming the basis for a variety of tools that even influence both web
          designers and developers influence both web designers and developers.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              className="w-7 h-7 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Leos avatar"
            />
            <span className="font-medium dark:text-white">Jese Leos</span>
          </div>
          <a
            href="#"
            className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Read more
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
}