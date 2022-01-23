import { useEffect } from "react"
import { pageManagerPropsDatatype } from "./datatypes"
import ReactGa from "react-ga";
import { changeActivePageWrapper } from "./utils";


export const PageManager = (props: pageManagerPropsDatatype) => {
    useEffect(() => {
        ReactGa.pageview(props.page ? props.page : (window.location.pathname + window.location.search));
    }, [])

    return (
        <div
            className="apple"
            onMouseEnter={(e) => {
                changeActivePageWrapper(props.page || "/")(e);
            }}
        >
            {props.children}
        </div>
    )
}