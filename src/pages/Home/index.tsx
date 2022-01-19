import "./index.css";
import { Layout } from "../../components/Layout";
import { Intro } from "./components/Intro";
import { AboutMe } from "./components/AboutMe";

export const Home = () => {
    return (
        <Layout>
            <Intro />
            <AboutMe />
        </Layout>
    )
}