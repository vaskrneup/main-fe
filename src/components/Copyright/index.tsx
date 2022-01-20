import "./copyright.css";


export const Copyright = () => {
    return (
        <div className="copyright-container">
            <div className="container">
                <div className="copyright">
                    &#169; Bhaskar Neupane {(new Date()).getFullYear()}
                </div>
            </div>
        </div>
    )
}