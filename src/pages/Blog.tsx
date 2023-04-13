import { useParams } from "react-router-dom";
import { useBlogStore, BlogData } from "../stores/useBlogStore";
import { shallow } from "zustand/shallow";
import { useEffect, useState } from "react";

let initialState: BlogData = {
  id: "",
  author: "",
  img: "",
  title: "",
  createdAt: new Date(),
  content: "",
  category: "tutorial",
};

export default function Blog() {
  const [blog, setBlog] = useState<BlogData>(initialState);

  const { id } = useParams<{ id: string }>();

  const [blogs, readBlog] = useBlogStore(
    (state) => [state.blogs, state.readBlog],
    shallow
  );

  useEffect(() => {
    if (id !== undefined) {
      const _blog = Object.values(blogs).find((b) => b.id === id);
      if (_blog !== undefined) {
        setBlog(_blog);
      } else {
        readBlog();
      }
    }
  }, [id, blogs, readBlog]);

  return (
    <div className="max-w-screen-xl flex flex-col items-start flex-wrap mx-auto space-y-10 my-10">
      <div className="inline-flex items-center mr-3 text-sm text-white">
        <img
          className="mr-4 w-16 h-16 rounded-full"
          src={blog.img}
          alt={blog.author}
        />
        <div>
          <p className="text-xl font-bold text-white">
            {blog.author}
          </p>
        </div>
      </div>
      <h1 className="max-w-2xl mb-4 text-2xl text-start font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white">
        {blog.title}
      </h1>
      <p className="my-5 max-w-sm xl:max-w-2xl font-normal text-gray-300">{blog.content}</p>
    </div>
  );
}
