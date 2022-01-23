import { Chip } from "../../../../../../components/Chip";
import { HR } from "../../../../../../components/HR";
import { changeActivePageWrapper } from "../../../../../../components/PageManager/utils";
import "./blog_view.css";
import { blogViewPropsDatatype } from "./datatypes";
import { Link } from "react-router-dom";


export const BlogView = (props: blogViewPropsDatatype) => {
    return (
        <div className="blog-view-container">
            <div className="blog-view-top-section">
                <h2>
                    <Link to={`/blog/${props.id}`} onClick={changeActivePageWrapper(`/blogs/${props.id}`)}>
                        {props.blogTitle}
                    </Link>
                </h2>
                <p className="description">
                    {props.blogDescription}
                </p>
            </div>
            <div className="blog-view-bottom-section">
                <div className="blog-category-chip-container">
                    {
                        props.blogTags.map(
                            (tag) => (
                                <Chip key={tag}>{tag}</Chip>
                            )
                        )
                    }
                </div>
                <HR />
                <div className="blog-datetime-container">
                    <span>{props.creationDate}</span>
                    <span>{props.readTime}</span>
                </div>
            </div>
        </div>
    )
}