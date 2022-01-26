import { Chip } from "../../../../../../components/Chip";
import { HR } from "../../../../../../components/HR";
import { changeActivePageWrapper } from "../../../../../../components/PageManager/utils";
import "./blog_view.css";
import { BlogData } from "./datatypes";
import { Link } from "react-router-dom";


export const BlogView = ({ blog }: { blog: BlogData }) => {
    return (
        <div className="blog-view-container">
            <div className="blog-view-top-section">
                <h2>
                    <Link to={`/blog/${blog.getAllData().id}`} onClick={changeActivePageWrapper(`/blogs/${blog.getAllData().id}`)}>
                        {blog.getAllData().blogTitle}
                    </Link>
                </h2>
                <p className="description">
                    {blog.getAllData().blogDescription}
                </p>
            </div>
            <div className="blog-view-bottom-section">
                <div className="blog-category-chip-container">
                    {
                        blog.getAllData().blogTags.map(
                            (tag: string) => (
                                <Chip key={tag}>{tag}</Chip>
                            )
                        )
                    }
                </div>
                <HR />
                <div className="blog-datetime-container">
                    <span>{blog.getAllData().creationDate}</span>
                    <span>{blog.getAllData().readTime}</span>
                </div>
            </div>
        </div>
    )
}