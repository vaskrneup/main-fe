import { Copyright } from "../Copyright";
import { Navbar } from "../Navbar"
import { layoutPropsDatatype } from "./datatypes"
import "./index.css";


export const Layout = (props: layoutPropsDatatype) => {
    return (
        <div className="layout">
            <Navbar />
            <main>
                {props.children}
            </main>
            <Copyright />
        </div>
    )
}