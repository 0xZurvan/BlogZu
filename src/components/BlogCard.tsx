import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useBlogStore } from "../stores/useBlogStore";
import { shallow } from "zustand/shallow";
interface BlogCardProps {
  id: string;
  author: string;
  img: string;
  title: string;
  content: string;
  category: "tutorial" | "article";
  to: string;
}

export default function BlogCard({
  id,
  author,
  img,
  title,
  content,
  category,
  to,
}: BlogCardProps) {
  const user = useUserStore((state) => state.user);
  const deleteBlog = useBlogStore((state) => state.deleteBlog);

  return (
    <div>
      <article className="p-6 rounded-lg border shadow-md bg-gray-800 border-gray-700">
        <div className="flex justify-between items-baseline mb-5 text-gray-500">
          <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
            {category}
          </span>
          {user.currentUser?.displayName === author ? (
            <button onClick={() => deleteBlog(id)}>
              <svg
                className="w-4 h-4 fill-current text-primary-200 hover:text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </button>
          ) : (
            <div></div>
          )}
        </div>
        <h2 className="mb-2 line-clamp-1 text-2xl font-bold tracking-tight text-white">
          <Link to={to}>{title}</Link>
        </h2>
        <p className="mb-5 line-clamp-4 font-light text-gray-400">{content}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img className="w-7 h-7 rounded-full" src={img} alt={author} />
            <span className="font-medium text-white">{author}</span>
          </div>
          <Link
            to={to}
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
          </Link>
        </div>
      </article>
    </div>
  );
}
