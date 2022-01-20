import { HRPropsDatatype } from "./datatypes";
import "./HR.css";


export const HR = (props: HRPropsDatatype) => {
    return (
        <div
            className="hr"
            style={{
                height: props.height,
                backgroundColor: props.backgroundColor
            }}
        >&nbsp;</div>
    )
}