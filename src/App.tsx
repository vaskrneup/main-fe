import { Home } from "./pages/Home";
import ReactGa from "react-ga";
import {
  Routes,
  Route
} from "react-router-dom";
import { BlogListView } from "./pages/blog/BlogListView";
import { BlogDetailView } from "./pages/blog/BlogDetailView";
import { ProjectListView } from "./pages/project/ProjectListView";
import { ProjectDetailView } from "./pages/project/ProjectDetailView";
import { PageNotFound404 } from "./pages/error/PageNotFound404";
import { DOWNLOAD_SITEMAP } from "./data/config";
import { saveSiteMap } from "./bin/sitemap/sitemapGenerator";

ReactGa.initialize('UA-216138233-1')

function App() {
  if (DOWNLOAD_SITEMAP) {
    saveSiteMap()
  }

  return (
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
  );
}

export default App;
