import { ProjectView } from "./components/ProjectView"
import "./projects.css";


export const Projects = () => {
    return (
        <div className="project-view">
            <div className="container">
                <h4>PROJECTS</h4>
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
    )
}