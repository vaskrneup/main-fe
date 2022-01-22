import { PageManager } from "../PageManager";
import "./copyright.css";


export const Copyright = () => {
    return (
        <PageManager page="scroll-copyright">
            <div className="copyright-container">
                <div className="container">
                    <div className="copyright">
                        &#169; Bhaskar Neupane {(new Date()).getFullYear()}
                    </div>
                </div>
            </div>
        </PageManager>
    )
}