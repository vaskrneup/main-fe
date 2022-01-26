import { Link } from "react-router-dom";
import { Layout } from "../../../components/Layout"
import { PageManager } from "../../../components/PageManager"
import "../error_main.css";

export const PageNotFound404 = () => {
    return (
        <Layout>
            <PageManager>
                <div className="container">
                    <div className="error-container">
                        <h1 className="error-title">
                            404
                        </h1>
                        <h2 className="error-subtitle">
                            Page Not Found
                        </h2>
                        <p className="error-description">
                            Seems like, you are lost. Perhaps you'll surely find what you are looking for back home.
                        </p>
                        <Link
                            to="/"
                            className="error-action-btn"
                        >
                            Go Home
                        </Link>
                    </div>
                </div>
            </PageManager>
        </Layout>
    )
}