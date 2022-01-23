import React from "react";
import { Section } from "../../pages/Home/components/Section";
import { LogoMaker } from "../LogoMaker";
import "./index.css";
import { SOCIAL_SITES } from "../../data/socialSites";
import { changeActivePage, changeActivePageWrapper } from "../PageManager/utils";
import { Link } from "react-router-dom";


const scrollManager = (sectionId: string, preventDefault: boolean = true) => {
    const scrollToSection = (e: React.MouseEvent) => {
        if (preventDefault) e.preventDefault();

        setTimeout(() => {
            const offsetValue = document.getElementById(sectionId)?.offsetTop;

            window.scrollTo({
                top: (offsetValue ? offsetValue - 70 : offsetValue),
                behavior: "smooth"
            })
        }, window.location.pathname === "/" ? 30 : 300)
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
                            <Link
                                className="logo-section"
                                to="/"
                                onClick={(e) => {
                                    scrollManager("intro", false,)(e);
                                    changeActivePage("intro");
                                }}
                            >
                                <LogoMaker
                                    mainChar="V"
                                    name="askr"
                                />
                            </Link>
                            <ul className="navigation-link">
                                <li>
                                    <Link
                                        to="/"
                                        onClick={(e) => {
                                            scrollManager("about-me", false)(e);
                                            changeActivePage("about-me");
                                        }}
                                        className="animated-line">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="animated-line"
                                        onClick={(e) => {
                                            scrollManager("projects", false)(e)
                                            changeActivePage("projects");
                                        }}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="animated-line"
                                        onClick={(e) => {
                                            scrollManager("blog", false)(e)
                                            changeActivePage("blog");
                                        }}
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="animated-line"
                                        onClick={(e) => {
                                            scrollManager("contact", false)(e);
                                            changeActivePage("contact");
                                        }}
                                    >
                                        Contact
                                    </Link>
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
                                        onClick={changeActivePageWrapper(`/social-site-through-main/${site}`)}
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