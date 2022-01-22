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
        icon: pythonLogo,
        url: "https://www.python.org/"
    },
    {
        name: "Django",
        icon: djangoLogo,
        url: "https://www.djangoproject.com/"
    },
    {
        name: "Django Rest Framework",
        icon: djangoRestFrameworkLogo,
        url: "https://www.django-rest-framework.org/"
    },
    {
        name: "PostgreSQL",
        icon: postgreSQLLogo,
        url: "https://www.postgresql.org/"
    },
    {
        name: "Docker",
        icon: dockerLogo,
        url: "https://www.docker.com/"
    },
    {
        name: "HTML5",
        icon: html5Logo,
        url: "https://en.wikipedia.org/wiki/HTML5"
    },
    {
        name: "CSS3",
        icon: css3Logo,
        url: "https://en.wikipedia.org/wiki/CSS"
    },
    {
        name: "Javascript",
        icon: javascriptLogo,
        url: "https://en.wikipedia.org/wiki/JavaScript"
    },
    {
        name: "Typescript",
        icon: typeScriptLogo,
        url: "https://www.typescriptlang.org/"
    },
    {
        name: "React",
        icon: reactLogo,
        url: "https://reactjs.org/"
    },
    {
        name: "TailwindCSS",
        icon: tailwindCssLogo,
        url: "https://tailwindcss.com/"
    },
    {
        name: "Material-UI",
        icon: materialUILogo,
        url: "https://mui.com/"
    },
    {
        name: "GIT",
        icon: gitLogo,
        url: "https://git-scm.com/about"
    },
]


export const AboutMe = () => {
    return (
        <Section>
            <div className="aboutme-section" id="about-me">
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
                                            Hi! my name is Bhaskar Neupane. I am a recent A-Levels graduate and a Full-Stack software developer based in Kathmandu, Nepal. My passion for programming started back in 2015 when I wrote my first proper program using QBasic to solve quadratic equations. Turns out making computer do my maths homework was a fun place to start my journey as a problem solver.
                                        </p>
                                        <br />
                                        <p>
                                            Currently, I am working as a Full-Stack Developer using several Technologies. Additionally, I am learning about Machine and Deep Learning and am looking forward to learn hardware side of things too.
                                        </p>
                                        <br />
                                        <p>
                                            I love to capture memories, it helps to break pattern and helps me stay creative and have a fresh mind. I have few images that I have captured in my <a href="https://instagram.com/vaskrneup" target={"_blank"} className="animated-line">instagram</a>.
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
                                                            url={technology.url}
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