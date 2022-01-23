import { BLOG_DATA } from "../../../data/blogData"
import { BlogView } from "../../Home/components/Blog/components/BlogView"
import { Layout } from "../../../components/Layout";

import "../../Home/components/Blog/blog.css";
import "./blog_list_view.css"


export const BlogListView = () => {
    return (
        <Layout>
            <div className="blog-container" id="blog">
                <div className="container">
                    <h2 className="page-title">My Blogs</h2>

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
                    </div>
                </div>
            </div>
        </Layout>
    )
}