import React from 'react'
import esthete from '../esthete.png';
import litwine from '../Lit&Wine.png';
import partie from '../partie.png'
import fitnessApp from '../fitnessApp.jpg';
import dayPlanner from '../dayPlanner.png';
import employee from '../employeeSummary.png';
import pwa from '../PWA.jpg';
import noteTaker from '../noteTaker.jpeg';
import bookSearch from '../bookSearch.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";
function Portfolio() {

    const openPopupboxEsthete = () => {
        const content = (


            <>
                <img src={esthete} alt="esthete project" className="portfolio-image-popupbox" />
                <p>
                    Esthete Gallery is an art gallery management system that allows an art gallery owner to maintain details of artists and paintings with great ease. With the help of this app, gallery owners can store, view, and maintain inventory.
                    In addition to maintenance, the app also allows owner to post future events and keep customers/users upto date on exhibitions being held by the Gallery.
            </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://esthetegallery.herokuapp.com/", "_blank")}>https://esthetegallery.herokuapp.com/</a>
                <br />
                <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Sumayyahm/Project2")}>https://github.com/Sumayyahm/Project2</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigEsthete = {
        titleBar: {
            enable: true,
            text: "Esthete Gallery Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxLitWine = () => {
        const content = (


            <>
                <img src={litwine} alt="lit and wine project" className="portfolio-image-popupbox" />
                <p>
                    As a book reader I would like a one-stop shop application to find a prominent book I should read and add to my collection, and I would also like a recommendation of the best type of wine that would go with the book. 
                    Lit and wine is a app readers can go to when they are feeling adventurous and they want to read books recommended by expert readers like my team and I. Our site features prominent authors whose work we've truly enjoyed. 
                    These are hand picked authors and books who we believe everyone should read at least once in their life time... 
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://blegesse-git.github.io/Lit-Wine/", "_blank")}>https://blegesse-git.github.io/Lit-Wine/</a>
                <br />
                <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/blegesse-git/Lit-Wine")}>https://github.com/blegesse-git/Lit-Wine</a>

            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigLitWine = {
        titleBar: {
            enable: true,
            text: "Lit&Wine Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxPartie = () => {
        const content = (


            <>
                <img src={partie} alt="partie project" className="portfolio-image-popupbox" />
                <p>
                    Partie is a planning REACT app made for event planners to help them keep track of their upcoming events, track budgets, todo items, prepare invoices and send out RSVPs if needed, all on a clean and clutter free dashboard.
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://powerful-fortress-17827.herokuapp.com/", "_blank")}>https://powerful-fortress-17827.herokuapp.com/</a>
                <br />
                <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sahibamj/Project-3")}>https://github.com/sahibamj/Project-3</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPartie = {
        titleBar: {
            enable: true,
            text: "Partie Planning App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxDayPlanner = () => {
        const content = (


            <>
                <img src={dayPlanner} alt="day planner project" className="portfolio-image-popupbox" />
                <p>
                    This project is a simple daily planner that allows user to visually analyze the date and time based on color. Current time of the day shows red, future is highlighted in green, and past is in red. With a click of 'Save' button, user can store their input and have access to it even after closing the browser. The current date is always present and updated. Technologies Used: Moment.js, jQuery
            </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://blegesse-git.github.io/Day-Planner/", "_blank")}>https://blegesse-git.github.io/Day-Planner/</a>
                <br />
                <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/blegesse-git/Day-Planner")}>https://github.com/blegesse-git/Day-Planner</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigDayPlanner = {
        titleBar: {
            enable: true,
            text: "Day Planner"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxFitnessTracker = () => {
        const content = (


            <>
                <img src={fitnessApp} alt="fitness tracker project" className="portfolio-image-popupbox" />
                <p>
                    Fitness App is a user friendly application that lets users view, create, and track daily workouts. User is able to log multiple exercises in a workout on a given day. The app also provides means to be able to track the name, type, weight, sets, reps, and duration of exercise. In case of cardio exercise, user can easily track distance traveled.
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://secret-headland-22783.herokuapp.com/", "_blank")}>https://secret-headland-22783.herokuapp.com/</a>
                <br />
                <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/blegesse-git/Fitness-Tracker")}>https://github.com/blegesse-git/Fitness-Tracker</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigFitnessTracker = {
        titleBar: {
            enable: true,
            text: "Fitness Tracker App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxNoteTaker = () => {
        const content = (


            <>
                <img src={noteTaker} alt="Note taker project" className="portfolio-image-popupbox" />
                <p>
                    Note Taker is an app with cool features that lets user write and save notes.
                    Want to scratch your notes and start over clean? That is no problem at all. 
                    Note Taker also allows user to delete previously saved notes helping you 
                    organize your thoughts and keep track of tasks you need to complete. 
                   
                    Note taker application is an application that can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file.
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://polar-sierra-14115.herokuapp.com/", "_blank")}>https://polar-sierra-14115.herokuapp.com/</a>
                <br />
                <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/blegesse-git/Note-Taker")}>https://github.com/blegesse-git/Note-Taker</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigNoteTaker = {
        titleBar: {
            enable: true,
            text: "Note Taking App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxEmployeeSummary = () => {
        const content = (


            <>
                <img src={employee} alt="employee summary engine project" className="portfolio-image-popupbox" />
                <p>
                    This is a software engineering team generator command line application. The application prompts the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will creare an HTML file that displays a nicely formatted team roster based on the information provided by the user.            
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/file/d/1WmiMj4KL-1Yu12dmPRVachqE7jm_VXSl/view", "_blank")}>https://drive.google.com/file/d/1WmiMj4KL-1Yu12dmPRVachqE7jm_VXSl/view</a>
                <br />
                <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/blegesse-git/Template-Engine-Employee-summary")}>https://github.com/blegesse-git/Template-Engine-Employee-summary</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigEmployee = {
        titleBar: {
            enable: true,
            text: "Template Engine Employee Summary App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxPWA = () => {
        const content = (


            <>
                <img src={pwa} alt="pwa project" className="portfolio-image-popupbox" />
                <p>
                    Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to an application's success.

                    With this app, users are able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, the app automatically populate the total when brought back online.

                    Offline Functionality includes: enter deposits offline, enter expenses offline. When brought back online, offline entries are added to tracker.
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://powerful-escarpment-08226.herokuapp.com/", "_blank")}>https://powerful-escarpment-08226.herokuapp.com/</a>
                <br />
                <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/blegesse-git/PWA-Budget_Tracker")}>https://github.com/blegesse-git/PWA-Budget_Tracker</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPWA = {
        titleBar: {
            enable: true,
            text: "PWA Budget Tracking App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    const openPopupboxBookSearch = () => {
        const content = (


            <>
                <img src={bookSearch} alt="google book search project" className="portfolio-image-popupbox" />
                <p>
                This is a React-based Google Books Search app that uses React lifecycle methods to query and display books based on user searches. The app also utilizes Node, Express and MongoDB so that users can save books to review or purchase later.
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://tranquil-badlands-34308.herokuapp.com/", "_blank")}>https://tranquil-badlands-34308.herokuapp.com//</a>
                <br />
                <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/blegesse-git/Google-Book-Search")}>https://github.com/blegesse-git/Google-Book-Search</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigBook = {
        titleBar: {
            enable: true,
            text: "Google Book Search"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxEsthete}>

                        <img className="portfolio-image" src={esthete} alt="esthete gallery project" />
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>


                    <div className="portfolio-image-box" onClick={openPopupboxLitWine}>
                        <img className="portfolio-image" src={litwine} alt="lit and wine project" />
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxPartie}>
                        <img className="portfolio-image" src={partie} alt="partie project" />
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxDayPlanner}>
                        <img className="portfolio-image" src={dayPlanner} alt="day planner project" />
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxFitnessTracker}>
                        <img className="portfolio-image" src={fitnessApp} alt="fitness tracker project" />
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxBookSearch}>
                        <img className="portfolio-image" src={bookSearch} alt="Book Search project" />
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxPWA}>
                        <img className="portfolio-image" src={pwa} alt="pwa project" />
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxNoteTaker}>
                        <img className="portfolio-image" src={noteTaker} alt="note taker project" />
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    
                    
                    
                    <div className="portfolio-image-box" onClick={openPopupboxEmployeeSummary}>
                        <img className="portfolio-image" src={employee} alt="employee project" />
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>

                </div>
            </div>
            <PopupboxContainer {...popupboxConfigEsthete} />
            <PopupboxContainer {...popupboxConfigLitWine} />
            <PopupboxContainer {...popupboxConfigPartie} />
            <PopupboxContainer {...popupboxConfigDayPlanner} />
            <PopupboxContainer {...popupboxConfigFitnessTracker} />
            <PopupboxContainer {...popupboxConfigNoteTaker} />
            <PopupboxContainer {...popupboxConfigEmployee} />
            <PopupboxContainer {...popupboxConfigPWA} />
            <PopupboxContainer {...popupboxConfigBook} />
        </div>
    )
}

export default Portfolio
