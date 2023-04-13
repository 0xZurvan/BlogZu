import { shallow } from "zustand/shallow";
import BlogCard from "../components/BlogCard";
import { useBlogStore } from "../stores/useBlogStore";
import { useEffect } from "react";

export default function Blogs() {
  const [blogs, readBlog] = useBlogStore(
    (state) => [state.blogs, state.readBlog],
    shallow
  );

  useEffect(() => {
    const unsubscribe = readBlog();

    return () => unsubscribe;
  }, []);

  return (
    <div className="max-w-screen-xl flex flex-col items-center flex-wrap justify-center mx-auto space-y-10 my-10">
      <h1 className="max-w-2xl mb-4 text-2xl text-start font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white">
        Blogs
      </h1>
      <div className="mx-auto px-10 max-w-screen lg:mb-16 mb-8 grid gap-8 lg:grid-cols-2 grid-cols-1">
        {blogs ? (
          Object.values(blogs).map(blog => {
            return (
              <div key={blog.id}>
                <BlogCard
                  id={blog.id}
                  author={blog.author}
                  img={blog.img}
                  title={blog.title}
                  content={blog.content}
                  category={blog.category}
                  to={`/blogs/${blog.id}`}
                />
              </div>
            )
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
