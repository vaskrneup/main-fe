import { useEffect } from "react"
import { pageManagerPropsDatatype } from "./datatypes"
import ReactGa from "react-ga";


export const PageManager = (props: pageManagerPropsDatatype) => {
    useEffect(() => {
        ReactGa.pageview(props.page ? props.page : (window.location.pathname + window.location.search));
    }, [])

    return (
        <div>
            {props.children}
        </div>
    )
}