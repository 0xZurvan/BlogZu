
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Write from "./pages/Write";

function App() {

  return (
    <div className="my-6 flex flex-col gap-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  )
}

export default App;
