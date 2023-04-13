
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Write from "./pages/Write";
import Blog from "./pages/Blog";

function App() {

  return (
    <div className="my-6 flex flex-col gap-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" >
          <Route index element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
        </Route>
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  )
}

export default App;
