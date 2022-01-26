import { Layout } from "../../../components/Layout"
import { PROJECT_DATA } from "../../../data/projectData"
import { PageManager } from "../../../components/PageManager"
import { ProjectData } from "../../Home/components/Projects/components/ProjectView/datatypes"
import { ProjectView } from "../../Home/components/Projects/components/ProjectView"
import "./project_list_view.css";


export const ProjectListView = () => {
    return (
        <PageManager>
            <Layout>
                <div className="project-view" id="projects">
                    <div className="container">
                        <h3 className="page-title">
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
                        </div>
                    </div>
                </div>
            </Layout>
        </PageManager>
    )
}