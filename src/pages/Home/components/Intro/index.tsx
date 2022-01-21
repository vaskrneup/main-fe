import "./index.css";



export const Intro = () => {
    return (
        <div className="intro-section" id="intro">
            <div className="container">
                <div className="section-body">
                    <div className="intro">
                        <h4 className="my-name-title">
                            Hi! my name is
                        </h4>
                        <h1 className="name section-title">
                            Bhaskar Neupane
                        </h1>
                        <h2 className="what-can-i-do">
                            I build software solutions for your problems.
                        </h2>

                        <p className="brief-intro">
                            Hello! I'm a recent A-Levels graduate and a Full-Stack Developer based in Kathmandu, Nepal. Currenly, I am learning about Machine Learning and working as a Freelancer.
                        </p>

                        <a
                            href="https://drive.google.com/file/d/1516EXritCUF9ReQJXspGLepwF6mNbaaz/view?usp=sharing"
                            target={"_blank"}
                            className="resume-btn button"
                        >
                            RESUME
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
