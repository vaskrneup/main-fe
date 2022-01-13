import { LogoMakerPropsDataType } from "./datatypes";
import "./index.css";

export const LogoMaker = (props: LogoMakerPropsDataType) => {
    return (
        <div className="logo-maker">
            <div className="main-letter-wrapper">
                {props.mainChar}
            </div>
            <div className="name-wrapper">
                {props.name}
            </div>
        </div>
    )
}