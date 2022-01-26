import { DataManager } from "../../../../../../data/manager"

export interface blogViewPropsDatatype {
    id: string | number,
    blogTitle: string,
    blogDescription: string,
    blogTags: string[],
    creationDate: string,
    readTime: string,
    blogMarkdownLink: string
}

export interface optionalBlogViewPropsDatatype {
    id?: string | number,
    blogTitle?: string,
    blogDescription?: string,
    blogTags?: string[],
    creationDate?: string,
    readTime?: string,
    blogMarkdownLink?: string
}

export type blogViewPropsDatatypeKeys = "id" | "blogTitle" | "blogDescription" | "blogTags" | "creationDate" | "readTime" | "blogMarkdownLink"


export class BlogData extends DataManager {
    constructor(public data: blogViewPropsDatatype) {
        super(data)
    }

    get = (key: blogViewPropsDatatypeKeys) => {
        return this.data[key]
    }
}
