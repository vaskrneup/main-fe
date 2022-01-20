import { TechnologyView } from "./components/TechnologyView";
import "./about-me.css";
import pythonLogo from "../../../../global_assets/images/technologies/PYTHON_LOGO.png";
import djangoLogo from "../../../../global_assets/images/technologies/DJANGO_LOGO.png";
import djangoRestFrameworkLogo from "../../../../global_assets/images/technologies/DRF_LOGO.png";
import postgreSQLLogo from "../../../../global_assets/images/technologies/POSTGRES_LOGO.png";
import dockerLogo from "../../../../global_assets/images/technologies/DOCKER_LOGO.png";
import html5Logo from "../../../../global_assets/images/technologies/HTML_LOGO.png";
import css3Logo from "../../../../global_assets/images/technologies/CSS_LOGO.png";
import javascriptLogo from "../../../../global_assets/images/technologies/JAVASCRIPT_LOGO.png";
import typeScriptLogo from "../../../../global_assets/images/technologies/TYPESCRIPT_LOGO.png";
import reactLogo from "../../../../global_assets/images/technologies/REACT_JS_LOGO.png";
import tailwindCssLogo from "../../../../global_assets/images/technologies/TAILWIND_CSS_LOGO.png";
import materialUILogo from "../../../../global_assets/images/technologies/MUI_LOGO.png";
import gitLogo from "../../../../global_assets/images/technologies/GIT_LOGO.png";

import { techIconAndName } from "./datatypes";
import { Section } from "../Section";

const TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST: techIconAndName[] = [
    {
        name: "Python",
        icon: pythonLogo
    },
    {
        name: "Django",
        icon: djangoLogo
    },
    {
        name: "Django Rest Framework",
        icon: djangoRestFrameworkLogo
    },
    {
        name: "PostgreSQL",
        icon: postgreSQLLogo
    },
    {
        name: "Docker",
        icon: dockerLogo
    },
    {
        name: "HTML5",
        icon: html5Logo
    },
    {
        name: "CSS3",
        icon: css3Logo
    },
    {
        name: "Javascript",
        icon: javascriptLogo
    },
    {
        name: "Typescript",
        icon: typeScriptLogo
    },
    {
        name: "React",
        icon: reactLogo
    },
    {
        name: "TailwindCSS",
        icon: tailwindCssLogo
    },
    {
        name: "Material-UI",
        icon: materialUILogo
    },
    {
        name: "GIT",
        icon: gitLogo
    },
]


export const AboutMe = () => {
    return (
        <Section>
            <div className="aboutme-section">
                <div className="container">
                    <div className="aboutme">
                        <h3 className="section-title">
                            ABOUT ME
                        </h3>
                        <div className="section-body">

                            <div className="content">
                                <div className="about-me-first">
                                    <div className="my-description">
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, nostrum! Velit voluptates, minus hic blanditiis quasi aliquam atque nesciunt saepe enim ipsum dolore pariatur explicabo libero quisquam culpa accusamus corporis!
                                        </p>
                                        <br />
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque doloribus delectus rem fuga deleniti minima, cumque, cum natus suscipit velit dolorem quibusdam magnam magni itaque molestiae repudiandae facilis illum maxime!
                                        </p>
                                        <br />
                                    </div>
                                    <div className="technologies-used">
                                        <h4>
                                            Here are few Technologies I've worked with:
                                        </h4>

                                        <div className="technologies-grid">
                                            {
                                                TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST.map((technology: techIconAndName) => {
                                                    return (
                                                        <TechnologyView
                                                            key={technology.name}
                                                            image={technology.icon}
                                                            name={technology.name}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <img
                                        className="image"
                                        src="https://pbs.twimg.com/profile_images/1265216954408689665/IkEH5P_j_400x400.jpg" alt="Bhaskar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Section>
    )
}