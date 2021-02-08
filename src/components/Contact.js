import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = 'template_ID';
    const userID = 'user_lnJ4nVGKF1saTvQdScrt4';

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {

        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent Successfully!")
            }).catch(err => console.error(`Something went wrong ${err}`));
                
            
    }

    return (
        <div id="contact" className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <span className="success-message">{successMessage}</span>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    ref={
                                        register({
                                            required: "Please enter your name",
                                            maxLength: {
                                                value: 20,
                                                message: "Please enter a name with fewer than 20 characters"
                                            } 
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-messsage">
                                {errors.name && errors.name.message}
                            </span>
                            <div className="text-center">
                                <input
                                    id="phone"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    ref={
                                        register({
                                            required: "Please enter your phone number",
                                            maxLength: {
                                                value: 20,
                                                message: "Please enter a name with fewer than 20 characters"
                                            } 
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-messsage">
                                {errors.phone && errors.phone.message}
                            </span>
                            <div className="text-center">
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    ref={
                                        register({
                                            required: "Please enter your email",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email'
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-messsage">
                                {errors.email && errors.email.message}
                            </span>
                            <div className="text-center">
                                <input
                                    id="subject"
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    ref={
                                        register({
                                            required: "You forgot to add the subject"
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-messsage">
                                {errors.subject && errors.subject.message}
                            </span>

                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea
                                    id="description"
                                    type="text"
                                    className="form-control"
                                    placeholder="Write your message here"
                                    name="description"
                                    ref={
                                        register({
                                            required: "You forgot to add description"
                                        })
                                    }
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-messsage">
                                {errors.description && errors.description.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">CONTACT ME</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
