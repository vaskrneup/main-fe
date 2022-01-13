import "./index.css";

export const Navbar = () => {
    return (
        <div className="navigation-section">
            <nav className="navbar-container">
                <div className="container">
                    <div className="navbar">
                        <div className="logo-section">
                            <h4>Vaskr</h4>
                        </div>
                        <ul className="navigation-link">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="navigation-info-bottom">
                <div className="container">
                    <div className="navbar-bottom-section">
                        <div className="navbar-bottom-detail">
                            <span></span>
                            <div className="vertical-line">
                                &nbsp;
                            </div>
                        </div>
                        <div className="navbar-bottom-detail">
                            <a href="mailto:abc@example.com">bhaskar@vaskrneup.com</a>
                            <div className="vertical-line">
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}