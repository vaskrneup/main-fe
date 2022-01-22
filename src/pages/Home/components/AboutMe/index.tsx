import { TechnologyView } from "./components/TechnologyView";
import "./about-me.css";
import { TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST } from "../../../../data/technologiesWorkedWith";
import { techIconAndName } from "./datatypes";
import { Section } from "../Section";
import { changeActivePageWrapper } from "../../../../components/PageManager/utils";


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
                                <div className="first-img-main-container">
                                    <div className="image-container first-img-container">
                                        <img
                                            className="image"
                                            src="https://pbs.twimg.com/profile_images/1265216954408689665/IkEH5P_j_400x400.jpg" alt="Bhaskar"
                                        />
                                    </div>
                                </div>
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
                                            I love to capture memories, it helps to break pattern and helps me stay creative and have a fresh mind. I have few images that I have captured in my <a href="https://instagram.com/vaskrneup" target={"_blank"} className="animated-line" onClick={changeActivePageWrapper("instagram-through-about-me")}>instagram</a>.
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
                                                            onClick={changeActivePageWrapper(`tools-i-have-used/${technology.name}`)}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="image-container second-img-container" id="sec">
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