import { projectViewPropsDatatype } from "../pages/Home/components/Projects/components/ProjectView/datatypes";
import spreadsheetImage from "./assets/images/project_bg/spreadsheet.png";
import flappyBirdImage from "./assets/images/project_bg/flappy_bird.png";


export const PROJECT_DATA: projectViewPropsDatatype[] = [
    {
        mainLink: "https://sheets.vaskrneup.com/",
        projectImage: spreadsheetImage,
        projectName: "Spreadsheet",
        projectFor: "Leapfrog Technology, Internship",
        githubLink: "https://github.com/vaskrneup/GoogleSheetsClone",
        demoLink: "https://sheets.vaskrneup.com/",
        projectDescription: "I built this web application with plain HTML, CSS and Javascript during my internship in Leapfrog Technology. It have few features that is availabe in google sheets or in other words it have baisc features and forumaes for doing calculations in spreadsheet.",
        projectTags: ["project", "javascript", "html", "css", "spreadsheet"]
    },
    {
        mainLink: "https://flappybird.vaskrneup.com",
        projectImage: flappyBirdImage,
        projectName: "Flappy Bird Game",
        projectFor: "Leapfrog Technology, Internship",
        githubLink: "https://github.com/vaskrneup/FlappyBird",
        demoLink: "http://flappybird.vaskrneup.com/",
        projectDescription: "I developed this game with plain HTML, CSS and Javascript in a single day during my internship in Leapfrog Technology. As I have never worked on making games, it was a difficult task. But like everything else, if you give it a try you can accomplish that without any issue",
        projectTags: ["project", "javascript", "html", "css", "game", "flappy-bird"]
    }
]