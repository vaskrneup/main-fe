import "./index.css";
import { Layout } from "../../components/Layout";
import { Intro } from "./components/Intro";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { PageManager } from "../../components/PageManager";

export const Home = () => {
    return (
        <PageManager page="/">
            <Layout>
                <Intro />
                <AboutMe />
                <Projects />
                <Blog />
                <Contact />
            </Layout>
        </PageManager>
    )
}