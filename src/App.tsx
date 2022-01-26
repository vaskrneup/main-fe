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
import { ProjectListView } from "./pages/project/ProjectListView";
import { ProjectDetailView } from "./pages/project/ProjectDetailView";
import { PageNotFound404 } from "./pages/error/PageNotFound404";

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
        <Route
          path="project/"
          element={<ProjectListView />}
        />
        <Route
          path="project/:projectId"
          element={<ProjectDetailView />}
        />
        <Route
          path="*"
          element={<PageNotFound404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
