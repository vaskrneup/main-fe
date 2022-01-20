import { chipPropsDatatype } from "./datatypes"
import "./chip.css";

export const Chip = (props: chipPropsDatatype) => {
    return (
        <div className="chip">
            {props.children}
        </div>
    )
}