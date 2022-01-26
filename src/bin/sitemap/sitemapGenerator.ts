import packageJsonData from "../../../package.json"
import { CREATE_SITEMAP_FROM } from "../../data/config"
import { BlogData } from "../../pages/Home/components/Blog/components/BlogView/datatypes"
import { ProjectData } from "../../pages/Home/components/Projects/components/ProjectView/datatypes"
import fs from "fs"


export const getFullURLPath = (path: string): string => {
    return `${packageJsonData.homepage}/#${path}`
}


export const STATIC_ROUTES: string[] = [
    getFullURLPath("/blog"),
    getFullURLPath("/project"),
]

export const sitemapGenerator = (data: (BlogData | ProjectData)[]): string[] => {
    let sitemapData: string[] = [...STATIC_ROUTES];

    for (let i = 0; i < data.length; i++) {
        sitemapData.push(
            (data[i].getAllData().blogTitle ? getFullURLPath(`/blog/${data[i].getAllData().id}`) : undefined) ||
            (data[i].getAllData().projectName ? getFullURLPath(`/project/${data[i].getAllData().id}`) : undefined) || "/"
        )
    }

    return sitemapData;
}


export const getSitemapUrl = (
    {
        loc, lastmod = "2022-01-26", changefreq = "monthly", priority = "1"
    }: {
        loc: string,
        lastmod?: string,
        changefreq?: string,
        priority?: string
    }
): string => {
    let url = "<url>"
    url += `<loc>${loc}</loc>`

    if (lastmod !== undefined) url += `<lastmod>${lastmod}</lastmod>`
    if (changefreq !== undefined) url += `<changefreq>${changefreq}</changefreq>`
    if (priority !== undefined) url += `<priority>${priority}</priority>`

    url += "</url>"

    return url
}

export const saveSiteMap = () => {
    let sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    `;
    const date = new Date()

    sitemapGenerator(CREATE_SITEMAP_FROM).forEach(url => {
        sitemap += getSitemapUrl({
            loc: url,
            lastmod: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`
        })
    })

    sitemap += "</urlset>"
    sitemap = sitemap.trim()

    download(sitemap, "sitemap.xml", "xml")
}

function download(text: string, name: string, type: string) {
    var a = document.createElement("a");
    var rootDiv = document.getElementById("root")
    rootDiv?.appendChild(a)

    var file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click()
    a.remove()
}
