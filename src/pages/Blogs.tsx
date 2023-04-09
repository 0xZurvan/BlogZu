import BlogCard from "../components/BlogCard";

/* type Blog = {
  id: number
  title: string;
  author: string;
  createdAt: Date,
  category: "article" | "tutorial",
  content: string
}
 */
export default function Blogs() {
  return (
    <div className="max-w-screen-xl flex flex-wrap justify-center mx-auto space-y-10 my-10">
      <h1 className="max-w-2xl mb-4 text-2xl text-start font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">Blogs</h1>
      <div className="mx-auto px-10 max-w-screen lg:mb-16 mb-8 grid gap-8 lg:grid-cols-2 grid-cols-1">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}
