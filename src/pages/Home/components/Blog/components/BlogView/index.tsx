import { Chip } from "../../../../../../components/Chip";
import { HR } from "../../../../../../components/HR";
import "./blog_view.css";
import { blogViewPropsDatatype } from "./datatypes";


export const BlogView = (props: blogViewPropsDatatype) => {
    return (
        <div className="blog-view-container">
            <div className="blog-view-top-section">
                <h2><a href="#">Some Catchy Title</a></h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, tenetur porro! Cum dolorem eaque fuga cumque harum repellendus rem quia natus, neque rerum ullam debitis, quasi praesentium eos et ratione?
                </p>
            </div>
            <div className="blog-view-bottom-section">
                <div className="blog-category-chip-container">
                    <Chip>First</Chip>
                    <Chip>First</Chip>
                    <Chip>First</Chip>
                    <Chip>First</Chip>
                    <Chip>First</Chip>
                    <Chip>First</Chip>
                </div>
                <HR />
                <div className="blog-datetime-container">
                    <span>May 1, 2021</span>
                    <span>2 min read</span>
                </div>
            </div>
        </div>
    )
}