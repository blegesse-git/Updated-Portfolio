import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <div className="container-fluid">
                    <Link smooth={true} to="home" className="navbar-brand" href="#"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link smooth={true} to="home" className="nav-link " aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="portfolio" className="nav-link" href="#">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="contact" className="nav-link" href="#">Contact</Link>
                            </li>
                            

                        </ul>


                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
