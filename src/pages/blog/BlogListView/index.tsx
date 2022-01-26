import { Layout } from "../../../components/Layout";
import { PageManager } from "../../../components/PageManager";
import { getBlogData } from "../../../data/blogData";
import "../../Home/components/Blog/blog.css";
import { BlogView } from "../../Home/components/Blog/components/BlogView";
import { BlogData } from "../../Home/components/Blog/components/BlogView/datatypes";
import "./blog_list_view.css";



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
                                        getBlogData(20).map(
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