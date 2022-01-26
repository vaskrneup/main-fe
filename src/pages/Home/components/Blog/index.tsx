import { Link } from "react-router-dom";
import { PageManager } from "../../../../components/PageManager";
import { getBlogData } from "../../../../data/blogData";
import { Section } from "../Section";
import "./blog.css";
import { BlogView } from "./components/BlogView";


export const Blog = () => {
    return (
        <PageManager page="scroll-blog" >
            <Section>
                <div className="blog-container" id="blog">
                    <div className="container">
                        <h3 className="section-title">
                            BLOGS
                        </h3>
                        <div className="section-body">
                            <div className="blog">
                                <div className="blogs-container">
                                    {
                                        getBlogData(4).map(
                                            (blog) => (
                                                <BlogView
                                                    key={blog.getAllData().blogTitle}
                                                    blog={blog}
                                                />
                                            )
                                        )
                                    }
                                </div>
                            </div>
                            <div className="view-more-link-container">
                                <Link to="/blog" className="view-more animated-line">VIEW MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </PageManager >
    )
}