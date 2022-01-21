import { Chip } from "../../../../../../components/Chip";
import { HR } from "../../../../../../components/HR";
import "./blog_view.css";
import { blogViewPropsDatatype } from "./datatypes";


export const BlogView = (props: blogViewPropsDatatype) => {
    return (
        <div className="blog-view-container">
            <div className="blog-view-top-section">
                <h2><a href="#">{props.blogTitle}</a></h2>
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