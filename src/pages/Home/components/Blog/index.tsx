import "./blog.css";
import { BlogView } from "./components/BlogView";


export const Blog = () => {
    return (
        <div className="blog-container">
            <div className="container">
                <div className="blog">
                    BLOGS
                    <div className="blogs-container">
                        <BlogView />
                        <BlogView />
                        <BlogView />

                    </div>
                </div>
                <div className="view-more-link-container">
                    <a href="#" className="view-more">VIEW MORE</a>
                </div>
            </div>
        </div>
    )
}