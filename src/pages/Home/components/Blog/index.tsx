import { Section } from "../Section";
import "./blog.css";
import { BlogView } from "./components/BlogView";
import { BLOG_DATA } from "../../../../data/blogData";
import { PageManager } from "../../../../components/PageManager";


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
                                        BLOG_DATA.map(
                                            (blog) => (
                                                <BlogView
                                                    key={blog.blogTitle}
                                                    {...blog}
                                                />
                                            )
                                        )
                                    }
                                </div>
                            </div>
                            <div className="view-more-link-container">
                                <a href="#" className="view-more animated-line">VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </PageManager >
    )
}