import { Chip } from "../../../../../../components/Chip"
import "./project_view.css"
import projectBGImage from "../../../../../../global_assets/images/projects_bg/FIRST_PROJECT.png";


export const ProjectView = () => {
    return (
        <div
            className="project-container"
            style={{
                backgroundImage: `linear-gradient(
                    rgba(26, 55, 77, 0.6),
                    rgba(26, 55, 77, 0.9)
                ),
                url(${projectBGImage})`
            }}
        >
            <div className="top-container">
                <div className="project-title-container">
                    <h2><a href="#">First Project</a></h2>
                    <h4>Company Name</h4>
                </div>
                <div className="project-external-link-container">
                    <a href="#">G</a>&nbsp;&nbsp;&nbsp;
                    <a href="#">E</a>
                </div>
            </div>
            <div className="bottom-contanier">
                <p className="project-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsa consequuntur, libero unde veniam, laudantium quam, alias dignissimos dolorem nobis placeat aperiam nihil quidem? Aut similique voluptas odit praesentium mollitia.
                </p>
                <div className="category-chip-container">
                    <Chip>First</Chip>
                    <Chip>First</Chip>
                    <Chip>First</Chip>
                    <Chip>First</Chip>
                    <Chip>First</Chip>
                    <Chip>First</Chip>
                </div>
            </div>
        </div>
    )
}