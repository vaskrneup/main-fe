import { Copyright } from "../Copyright";
import { Navbar } from "../Navbar"
import { layoutPropsDatatype } from "./datatypes"
import "./layout.css";


export const Layout = (props: layoutPropsDatatype) => {
    return (
        <div className="layout">
            <div>
                <Navbar />
                <main>
                    {props.children}
                </main>
            </div>
            <Copyright />
        </div>
    )
}