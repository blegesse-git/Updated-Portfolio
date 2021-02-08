import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="tel:214-738-3535">(214) 738-3535</a>
                                <br />
                                <p>legessebl@gmail.com</p>
                            </div>
                            <div className="col">

                                <a href="https://www.linkedin.com/in/bethelhem-legesse-2021/" target="_blank">Linkedin</a>

                                <br />
                                <a href="https://github.com/blegesse-git" target="_blank">GitHub</a>

                            </div>
                        </div>


                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contact</a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
