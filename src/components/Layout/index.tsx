import { Navbar } from "../Navbar"
import { layoutPropsDatatype } from "./datatypes"
import "./index.css";


export const Layout = (props: layoutPropsDatatype) => {
    return (
        <div className="layout">
            {props.children}

            <Navbar />
        </div>
    )
}