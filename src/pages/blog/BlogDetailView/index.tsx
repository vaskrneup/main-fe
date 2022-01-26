import axios from "axios"
import { useEffect, useState } from "react"
import { BlogData, blogViewPropsDatatype, optionalBlogViewPropsDatatype } from "../../Home/components/Blog/components/BlogView/datatypes"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { Layout } from "../../../components/Layout"

import "./blog_detail_view.css"
import { getBlogDataFromIdentifier } from "../../../data/blogData"
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as codeBlockTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm'
import { PageManager } from "../../../components/PageManager"


export const BlogDetailView = ({ blog }: { blog?: BlogData }) => {
    const [blogMarkdown, setBlogMarkdown] = useState("");
    const params = useParams<{ blogId: string }>();

    useEffect(() => {
        if (params !== undefined) {
            blog = getBlogDataFromIdentifier({ value: params.blogId })
        }

        if (blog?.getAllData().blogMarkdownLink) {
            axios.get(blog.getAllData().blogMarkdownLink)
                .then(resp => {
                    setBlogMarkdown(resp.data);
                })
                .catch(err => {
                    setBlogMarkdown(`## Error occured when fetching blog post.\n\n${err} `)
                })
        }
    }, [])

    return (
        <PageManager>
            <Layout>
                <div className="container">
                    <div className="markdown-container">
                        <ReactMarkdown
                            children={blogMarkdown}
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '')

                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            children={String(children).replace(/\n$/, '')}
                                            style={codeBlockTheme}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        />
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    )
                                }
                            }}
                        />
                    </div>
                </div>
            </Layout>
        </PageManager>
    )
}