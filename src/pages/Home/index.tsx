import "./index.css";
import { Layout } from "../../components/Layout";
import { Intro } from "./components/Intro";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";

export const Home = () => {
    return (
        <Layout>
            <Intro />
            <AboutMe />
            <Projects />
        </Layout>
    )
}