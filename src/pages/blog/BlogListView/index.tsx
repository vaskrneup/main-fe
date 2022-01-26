import { BLOG_DATA } from "../../../data/blogData"
import { BlogView } from "../../Home/components/Blog/components/BlogView"
import { Layout } from "../../../components/Layout";

import "../../Home/components/Blog/blog.css";
import "./blog_list_view.css"
import { PageManager } from "../../../components/PageManager";
import { BlogData } from "../../Home/components/Blog/components/BlogView/datatypes";


export const BlogListView = () => {
    return (
        <PageManager>
            <Layout>
                <div className="blog-container" id="blog">
                    <div className="container">
                        <h2 className="page-title">My Blogs</h2>

                        <div className="section-body">
                            <div className="blog">
                                <div className="blogs-container">
                                    {
                                        BLOG_DATA.map(
                                            (blog: BlogData) => (
                                                <BlogView
                                                    key={blog.getAllData().blogTitle}
                                                    blog={blog}
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
        </PageManager>
    )
}