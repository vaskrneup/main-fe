import { PROJECT_DATA } from "../../../../../../data/projectData";

export interface projectViewPropsDatatype {
    id: string | number,
    projectImage: string,
    projectName: string,
    projectFor: string,
    mainLink: string,
    projectDetailsMarkdownLink?: string,
    githubLink?: string,
    demoLink?: string,
    projectDescription: string,
    projectTags: string[]
}

export interface optionalProjectViewPropsDatatype {
    id?: string | number,
    projectImage?: string,
    projectName?: string,
    projectFor?: string,
    mainLink?: string,
    projectDetailsMarkdownLink?: string,
    githubLink?: string,
    demoLink?: string,
    projectDescription?: string,
    projectTags?: string[]
}


export type projectViewPropsDatatypeKeysType = "id" | "projectImage" | "projectName" | "projectFor" | "mainLink" | "githubLink" | "projectDetailsMarkdownLink" | "demoLink" | "projectDescription" | "projectTags"

interface getProjectDataFromIdentifierDatatype {
    identifier?: projectViewPropsDatatypeKeysType,
    value: string | number | undefined
}

export const getProjectDataFromIdentifier = (
    {
        identifier = "id",
        value
    }: getProjectDataFromIdentifierDatatype
): (projectViewPropsDatatype | undefined) => {
    if (value === undefined) return undefined;

    for (let i = 0; i < PROJECT_DATA.length; i++) {
        if (PROJECT_DATA[i][identifier] === value) {
            return PROJECT_DATA[i];
        }
    }

    return undefined
}