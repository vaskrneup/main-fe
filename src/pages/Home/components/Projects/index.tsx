import { Section } from "../Section";
import { ProjectView } from "./components/ProjectView"
import "./projects.css";


export const Projects = () => {
    return (
        <Section>
            <div className="project-view">
                <div className="container">
                    <h3 className="section-title">
                        PROJECTS
                    </h3>
                    <div className="section-body">
                        <div className="projects-container">
                            <ProjectView />
                            <ProjectView />
                            <ProjectView />
                            <ProjectView />
                            <ProjectView />
                        </div>
                        <div className="view-more-link-container">
                            <a href="#" className="view-more">VIEW MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}