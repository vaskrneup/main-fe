import React, { FormEvent, useState } from "react";
import { Section } from "../Section";
import "./contact.css";

export const Contact = () => {
    const [formDetails, setFormDetails] = useState({
        full_name: "",
        email: "",
        "message": ""
    })

    const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormDetails(prevValue => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }));
    }
    const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <Section>
            <div className="contact-container" id="contact">
                <div className="container">
                    <h3 className="section-title">
                        GET IN TOUCH
                    </h3>

                    <div className="section-body">
                        <div className="contact">
                            <div className="contact-main-content">
                                <p>
                                    Wether you have a question, want to talk about tech or project collaboration, or  just want to say hi. My inbox is always open. You can directly email me at <a href="mailto:bhaskar@vaskrneup.com" className="animated-line">bhaskar@vaskrneup.com</a> or say hello using the following form. I&apos;ll get back to you as soon as possible!
                                </p>
                                <div className="contact-form-container">
                                    <form action="#" onSubmit={handleFormSubmission}>
                                        <div className="name-email-container">
                                            <div className="input-container">
                                                <label htmlFor="full-name">Full Name</label>
                                                <input
                                                    onChange={handleInputValueChange}
                                                    id="full-name"
                                                    type="text"
                                                    name="full_name"
                                                    placeholder="Bhaskar Neupane"
                                                />
                                            </div>
                                            <div className="input-container">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    onChange={handleInputValueChange}
                                                    id="email"
                                                    type="text"
                                                    name="email"
                                                    placeholder="bhaskar@vaskrneup.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="message-container">
                                            <div className="input-container">
                                                <label htmlFor="message">Message</label>
                                                <textarea
                                                    onChange={handleInputValueChange}
                                                    placeholder="Lets have a chat!!"
                                                    id="message"
                                                    name="message"
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
            </div>
        </Section>
    )
}