import "./technology_view.css";
import { technologyViewPropsType } from "./datatypes"


export const TechnologyView = (props: technologyViewPropsType) => {
    return (
        <div className="technology-view">
            <img
                src={props.image}
                alt="Python Programming Language Icon"
            />
            <span className="technology-name">
                {props.name}
            </span>
        </div>
    )
}