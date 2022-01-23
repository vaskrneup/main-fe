import { Home } from "./pages/Home";
import ReactGa from "react-ga";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { BlogListView } from "./pages/blog/BlogListView";
import { BlogDetailView } from "./pages/blog/BlogDetailView";
import { useEffect } from "react";

ReactGa.initialize('UA-216138233-1')

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="blog/"
          element={<BlogListView />}
        />
        <Route
          path="blog/:blogId"
          element={<BlogDetailView />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
