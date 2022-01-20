import "./index.css";
import { Layout } from "../../components/Layout";
import { Intro } from "./components/Intro";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";

export const Home = () => {
    return (
        <Layout>
            <Intro />
            <AboutMe />
            <Projects />
            <Blog />
            <Contact />
        </Layout>
    )
}