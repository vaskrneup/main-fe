import { sectionPropsDatatype } from "./datatypes";
import "./section.css";


export const Section = (props: sectionPropsDatatype) => {
    return (
        <div
            className="section-container"
        >
            {props.children}
        </div>
    )
}