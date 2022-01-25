import { Chip } from "../../../../../../components/Chip"
import "./project_view.css"
import { projectViewPropsDatatype } from "./datatypes";
import { HR } from "../../../../../../components/HR";
import { changeActivePageWrapper } from "../../../../../../components/PageManager/utils";
import { Link } from "react-router-dom";


export const ProjectView = (props: projectViewPropsDatatype) => {
    let linkExtras: {
        to?: string,
        onClick: any,
        className: string,
        href?: string,
        target?: string
    } = {
        className: "project-name",
        onClick: window.location.pathname === "/" ? changeActivePageWrapper(`project-mainlink-${props.projectName}?redirect="${props.mainLink}"`) : undefined
    };

    if (props.projectDetailsMarkdownLink) {
        linkExtras = {
            ...linkExtras,
            to: `/project/${props.id}`,
        };
    } else {
        linkExtras = {
            ...linkExtras,
            href: props.mainLink,
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
                url(${props.projectImage})`
            }}
        >
            <div className="top-container">
                <div className="project-title-container">
                    <h2>
                        {linkExtras.to ? <Link
                            to={linkExtras.to}
                            {...linkExtras}
                        >
                            {props.projectName}
                        </Link> :
                            <a {...linkExtras}>{props.projectName}</a>
                        }
                    </h2>
                    <h4 className="project-for">{props.projectFor}</h4>
                </div>
                <div className="project-external-link-container">
                    {
                        props.githubLink ?
                            <a
                                href={props.githubLink}
                                target={"_blank"}
                                onClick={changeActivePageWrapper(`project-github-link-${props.projectName}?redirect="${props.githubLink}"`)}
                            >
                                <i className="fab fa-github link-btn"></i>
                            </a>
                            :
                            null
                    }
                    &nbsp;&nbsp;&nbsp;
                    {
                        props.demoLink ?
                            <a
                                href={props.demoLink}
                                target={"_blank"}
                                onClick={changeActivePageWrapper(`project-demo-link-${props.projectName}?redirect="${props.demoLink}"`)}
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
                    {props.projectDescription}
                </p>
                <HR />
                <div className="category-chip-container">
                    {
                        props.projectTags.map(
                            (tag) => (
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