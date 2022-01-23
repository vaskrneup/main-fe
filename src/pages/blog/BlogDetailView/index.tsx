import axios from "axios"
import { useEffect, useState } from "react"
import { blogViewPropsDatatype, optionalBlogViewPropsDatatype } from "../../Home/components/Blog/components/BlogView/datatypes"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { Layout } from "../../../components/Layout"

import "./blog_detail_view.css"
import { getBlogDataFromIdentifier } from "../../../data/blogData"
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as codeBlockTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm'


export const BlogDetailView = (props?: blogViewPropsDatatype | optionalBlogViewPropsDatatype) => {
    const [blogMarkdown, setBlogMarkdown] = useState("");
    const params = useParams<{ blogId: string }>();

    useEffect(() => {
        if (params !== undefined) {
            props = getBlogDataFromIdentifier({ value: params.blogId })
        }

        if (props?.blogMarkdownLink) {
            axios.get(props.blogMarkdownLink)
                .then(resp => {
                    setBlogMarkdown(
                        `

| Feature    | Support                |
| ---------: | :--------------------- |
| CommonMark | 100%                   |
| GFM        | 100% w/ \`remark-gfm\` |
                        
                        `
                    );
                })
                .catch(err => {
                    setBlogMarkdown(`## Error occured when fetching blog post.\n\n${err} `)
                })
        }
    }, [])

    return (
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
    )
}