import { Section } from "../Section";
import { ProjectView } from "./components/ProjectView"
import "./projects.css";
import { ProjectData, projectViewPropsDatatype } from "./components/ProjectView/datatypes";
import { PROJECT_DATA } from "../../../../data/projectData";
import { PageManager } from "../../../../components/PageManager";
import { Link } from "react-router-dom";


export const Projects = () => {
    return (
        <PageManager page="scroll-projects">
            <Section>
                <div className="project-view" id="projects">
                    <div className="container">
                        <h3 className="section-title">
                            PROJECTS
                        </h3>
                        <div className="section-body">
                            <div className="projects-container">
                                {PROJECT_DATA.map(
                                    (project: ProjectData) => {
                                        return (
                                            <ProjectView
                                                key={project.getAllData().projectName}
                                                project={project}
                                            />
                                        )
                                    }
                                )}
                            </div>
                            <div className="view-more-link-container">
                                <Link
                                    to="/project"
                                    className="view-more animated-line"
                                >
                                    VIEW MORE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </PageManager>
    )
}