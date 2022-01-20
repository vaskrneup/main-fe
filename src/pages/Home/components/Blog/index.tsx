import { Section } from "../Section";
import "./blog.css";
import { BlogView } from "./components/BlogView";


export const Blog = () => {
    return (
        <Section>
            <div className="blog-container">
                <div className="container">
                    <h3 className="section-title">
                        BLOGS
                    </h3>
                    <div className="section-body">
                        <div className="blog">
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
            </div>
        </Section>
    )
}