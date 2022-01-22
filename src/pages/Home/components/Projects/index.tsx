import { Section } from "../Section";
import { ProjectView } from "./components/ProjectView"
import "./projects.css";
import { projectViewPropsDatatype } from "./components/ProjectView/datatypes";
import { PROJECT_DATA } from "../../../../data/projectData";
import { PageManager } from "../../../../components/PageManager";


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
        </PageManager>
    )
}