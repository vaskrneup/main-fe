import { Section } from "../../pages/Home/components/Section";
import { LogoMaker } from "../LogoMaker";
import "./index.css";

export const Navbar = () => {
    return (
        <Section>
            <div className="navigation-section">
                <nav className="navbar-container">
                    <div className="container">
                        <div className="navbar">
                            <div className="logo-section">
                                <LogoMaker
                                    mainChar="V"
                                    name="askr"
                                />
                            </div>
                            <ul className="navigation-link">
                                <li><a href="#" className="animated-line">About</a></li>
                                <li><a href="#" className="animated-line">Projects</a></li>
                                <li><a href="#" className="animated-line">Blog</a></li>
                                <li><a href="#" className="animated-line">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="navbar-bottom-detail left-line">
                    <div className="vertical-line">
                        &nbsp;
                    </div>
                </div>
                <div className="navbar-bottom-detail right-line">
                    <a href="mailto:abc@example.com">bhaskar@vaskrneup.com</a>
                    <div className="vertical-line">
                        &nbsp;
                    </div>
                </div>
            </div>
        </Section>
    )
}