import { Navbar } from "../Navbar"
import { layoutPropsDatatype } from "./datatypes"

export const Layout = (props: layoutPropsDatatype) => {
    return (
        <div className="layout">
            <Navbar />
            {props.children}
        </div>
    )
}