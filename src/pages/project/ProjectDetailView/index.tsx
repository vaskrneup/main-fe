import { Layout } from "../../../components/Layout";
import { PageManager } from "../../../components/PageManager";
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectDataFromIdentifier, ProjectData } from "../../Home/components/Projects/components/ProjectView/datatypes";
import axios from "axios";
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as codeBlockTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./project-detail-view.css"


export const ProjectDetailView = ({ project }: { project?: ProjectData }) => {
    const [blogMarkdown, setBlogMarkdown] = useState("");
    const params = useParams<{ projectId: string }>();

    if (params !== undefined) {
        project = getProjectDataFromIdentifier({ value: params.projectId })
    }

    useEffect(() => {
        if (project?.getAllData().projectDetailsMarkdownLink) {
            axios.get(project.getAllData().projectDetailsMarkdownLink || "")
                .then(resp => {
                    setBlogMarkdown(resp.data);
                })
                .catch(err => {
                    setBlogMarkdown(`## Error occured when fetching Project's Detail.\n\n${err} `)
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