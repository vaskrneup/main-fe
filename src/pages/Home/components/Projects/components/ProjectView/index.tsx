import { Chip } from "../../../../../../components/Chip"
import "./project_view.css"
import { ProjectData } from "./datatypes";
import { HR } from "../../../../../../components/HR";
import { changeActivePageWrapper } from "../../../../../../components/PageManager/utils";
import { Link } from "react-router-dom";


export const ProjectView = ({ project }: { project: ProjectData }) => {
    let linkExtras: {
        to?: string,
        onClick: any,
        className: string,
        href?: string,
        target?: string
    } = {
        className: "project-name",
        onClick: window.location.pathname === "/" ? changeActivePageWrapper(`project-mainlink-${project.getAllData().projectName}?redirect="${project.getAllData().mainLink}"`) : undefined
    };

    if (project.getAllData().projectDetailsMarkdownLink) {
        linkExtras = {
            ...linkExtras,
            to: `/project/${project.getAllData().id}`,
        };
    } else {
        linkExtras = {
            ...linkExtras,
            href: project.getAllData().mainLink,
            target: "_blank",
        };
    }

    return (
        <div
            className="project-container"
            style={{
                backgroundImage: `linear-gradient(
                    rgba(26, 55, 77, 0.75),
                    rgba(26, 55, 77, 0.95)
                ),
                url(${project.getAllData().projectImage})`
            }}
        >
            <div className="top-container">
                <div className="project-title-container">
                    <h2>
                        {linkExtras.to ? <Link
                            to={linkExtras.to}
                            {...linkExtras}
                        >
                            {project.getAllData().projectName}
                        </Link> :
                            <a {...linkExtras}>{project.getAllData().projectName}</a>
                        }
                    </h2>
                    <h4 className="project-for">{project.getAllData().projectFor}</h4>
                </div>
                <div className="project-external-link-container">
                    {
                        project.getAllData().githubLink ?
                            <a
                                href={project.getAllData().githubLink}
                                target={"_blank"}
                                onClick={changeActivePageWrapper(`project-github-link-${project.getAllData().projectName}?redirect="${project.getAllData().githubLink}"`)}
                            >
                                <i className="fab fa-github link-btn"></i>
                            </a>
                            :
                            null
                    }
                    &nbsp;&nbsp;&nbsp;
                    {
                        project.getAllData().demoLink ?
                            <a
                                href={project.getAllData().demoLink}
                                target={"_blank"}
                                onClick={changeActivePageWrapper(`project-demo-link-${project.getAllData().projectName}?redirect="${project.getAllData().demoLink}"`)}
                            >
                                <i className="fas fa-external-link-alt link-btn"></i>
                            </a>
                            :
                            null
                    }
                </div>
            </div>
            <div className="bottom-contanier">
                <p className="project-description">
                    {project.getAllData().projectDescription}
                </p>
                <HR />
                <div className="category-chip-container">
                    {
                        project.getAllData().projectTags.map(
                            (tag: string) => (
                                <Chip
                                    key={tag}
                                >
                                    {tag}
                                </Chip>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}