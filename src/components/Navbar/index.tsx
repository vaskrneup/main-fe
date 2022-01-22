import React from "react";
import { Section } from "../../pages/Home/components/Section";
import { LogoMaker } from "../LogoMaker";
import "./index.css";
import { SOCIAL_SITES } from "../../data/socialSites";


const scrollManager = (sectionId: string) => {
    const scrollToSection = (e: React.MouseEvent) => {
        e.preventDefault()
        const offsetValue = document.getElementById(sectionId)?.offsetTop;

        window.scrollTo({
            top: (offsetValue ? offsetValue - 70 : offsetValue),
            behavior: "smooth"
        })
    }
    return scrollToSection;
}

export const Navbar = () => {
    return (
        <Section>
            <div className="navigation-section">
                <nav className="navbar-container">
                    <div className="container">
                        <div className="navbar">
                            <div className="logo-section" onClick={scrollManager("intro")}>
                                <LogoMaker
                                    mainChar="V"
                                    name="askr"
                                />
                            </div>
                            <ul className="navigation-link">
                                <li>
                                    <a
                                        href="#"
                                        onClick={scrollManager("about-me")}
                                        className="animated-line">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="animated-line"
                                        onClick={scrollManager("projects")}
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="animated-line"
                                        onClick={scrollManager("blog")}
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="animated-line"
                                        onClick={scrollManager("contact")}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="navbar-bottom-detail right-line">
                    {
                        SOCIAL_SITES.map(
                            (site) => {
                                return (
                                    <a
                                        target={"_blank"}
                                        href={site.profileLink}
                                        key={site.iconClass}
                                        className="public-profile-link"
                                    >
                                        <i className={site.iconClass}></i>
                                    </a>
                                )
                            }
                        )
                    }
                    <div className="vertical-line">
                        &nbsp;
                    </div>
                </div>
            </div>
        </Section>
    )
}