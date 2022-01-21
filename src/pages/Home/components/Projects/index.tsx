import { Section } from "../Section";
import { ProjectView } from "./components/ProjectView"
import "./projects.css";
import { projectViewPropsDatatype } from "./components/ProjectView/datatypes";
import spreadsheetImage from "./assets/images/project_bg/spreadsheet.png";
import flappyBirdImage from "./assets/images/project_bg/flappy_bird.png";


const PORJECT_DATA: projectViewPropsDatatype[] = [
    {
        mainLink: "https://sheets.vaskrneup.com/",
        projectImage: spreadsheetImage,
        projectName: "Spreadsheet",
        projectFor: "Leapfrog Technology, Internship",
        githubLink: "https://github.com/vaskrneup/GoogleSheetsClone",
        demoLink: "https://sheets.vaskrneup.com/",
        projectDescription: "I built this web application with plain HTML, CSS and Javascript during my internship in Leapfrog Technology. It have few features that is availabe in google sheets or in other words it have baisc features and forumaes for doing calculations in spreadsheet.",
        projectTags: ["project", "javascript", "html", "css", "spreadsheet"]
    },
    {
        mainLink: "https://flappybird.vaskrneup.com",
        projectImage: flappyBirdImage,
        projectName: "Flappy Bird Game",
        projectFor: "Leapfrog Technology, Internship",
        githubLink: "https://github.com/vaskrneup/FlappyBird",
        demoLink: "http://flappybird.vaskrneup.com/",
        projectDescription: "I developed this game with plain HTML, CSS and Javascript in a single day during my internship in Leapfrog Technology. As I have never worked on making games, it was a difficult task. But like everything else, if you give it a try you can accomplish that without any issue",
        projectTags: ["project", "javascript", "html", "css", "game", "flappy-bird"]
    }
]


export const Projects = () => {
    return (
        <Section>
            <div className="project-view" id="projects">
                <div className="container">
                    <h3 className="section-title">
                        PROJECTS
                    </h3>
                    <div className="section-body">
                        <div className="projects-container">
                            {PORJECT_DATA.map(
                                (project: projectViewPropsDatatype) => {
                                    return (
                                        <ProjectView
                                            key={project.projectName}
                                            {...project}
                                        />
                                    )
                                }
                            )}
                        </div>
                        <div className="view-more-link-container">
                            <a
                                href="#"
                                className="view-more animated-line"
                            >
                                VIEW MORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}