import ReactGa from "react-ga";

export const changeActivePage = (page: string) => {
    ReactGa.pageview(page);
}

export const changeActivePageWrapper = (page: string) => {
    return (e: any) => {
        ReactGa.pageview(page);
    }
}