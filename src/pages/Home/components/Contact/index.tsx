import "./contact.css";

export const Contact = () => {
    return (
        <div className="contact-container">
            <div className="container">
                <h2>Get in Touch</h2>

                <div className="contact">
                    <div className="contact-main-content">
                        <p>
                            Wether you have a question, want to talk about tech or project collaboration, or  just want to say hi. My inbox is always open. You can directly email me at bhaskar@vaskrneup.com or say hello using the following form. I&apos;ll get back to you as soon as possible!
                        </p>
                        <div className="contact-form-container">
                            <form action="#">
                                <div className="name-email-container">
                                    <div className="input-container">
                                        <label htmlFor="full-name">Full Name</label>
                                        <input
                                            id="full-name"
                                            type="text"
                                            placeholder="Bhaskar Neupane"
                                        />
                                    </div>
                                    <div className="input-container">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            placeholder="bhaskar@vaskrneup.com"
                                        />
                                    </div>
                                </div>
                                <div className="message-container">
                                    <div className="input-container">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            placeholder="Lets have a chat!!"
                                            id="message"
                                            cols={30}
                                            rows={10}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="input-container">
                                    <input
                                        type="submit"
                                        value="Say Hello!"
                                        className="submit-btn"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}