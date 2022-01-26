import { BLOG_DATA } from "./blogData"
import { PROJECT_DATA } from "./projectData"

export const DOWNLOAD_SITEMAP = false
export const SITEMAP_SAVE_DIR = "public/sitemap.xml"
export const CREATE_SITEMAP_FROM = [
    ...PROJECT_DATA,
    ...BLOG_DATA
]