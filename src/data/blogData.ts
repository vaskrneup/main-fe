import { blogViewPropsDatatype, blogViewPropsDatatypeKeys } from "../pages/Home/components/Blog/components/BlogView/datatypes"


export const BLOG_DATA: blogViewPropsDatatype[] = [
    {
        id: "first-blog",
        blogTitle: "First Blog",
        blogDescription: "Just a Test Blog, Nothing Much!!",
        blogTags: ["blog", "test"],
        creationDate: "Jan 17, 2022",
        readTime: "3 Min",
        blogMarkdownLink: "https://raw.githubusercontent.com/vaskrneup/IpChanger/main/README.md"
    },
]

export interface getBlogDataFromIdentifierPropsType {
    identifier?: blogViewPropsDatatypeKeys,
    value: string | number | undefined
}

export const getBlogDataFromIdentifier = (
    {
        identifier = "id",
        value
    }: getBlogDataFromIdentifierPropsType
): (blogViewPropsDatatype | undefined) => {
    if (value === undefined) return undefined;

    for (let i = 0; i < BLOG_DATA.length; i++) {
        if (BLOG_DATA[i][identifier] === value) {
            return BLOG_DATA[i];
        }
    }
    return undefined
}