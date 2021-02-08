import React from 'react';
import author from "../headshot.jpg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">

                        <img src={author} className="profile-img" alt="picture of author" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutMe">About Me</h1>
                    <p>
                    Life is an elevator. The trick is getting off on the right floor. Pharmacy was the first button I pressed - it required taking the steps to college and hopping on a layover lift to psychology. That was a crowded elevator. Every button was bright with hope and good intentions. And while people entered in droves, they trickled out like deer crossing the road - unsure of whether to commit or retreat back to safety. Fearful the doors might close before I leave, I hurried through the huddled masses when it came time to exit. I entered a lobby for pharmacy hopefuls. All the seats were taken, and a sign on the degree door read “Four years from this point.” Whispers of increased debt and competition echoed throughout the corridor, and I looked back to see the elevator doors still open.
                    

                    </p>
                    <span>Consistency has never been a theme for me. My first 13 years were spent in Addis Abeba, Ethiopia. From there we moved to Washington, then Connecticut, then back to Washington.. before settling in Texas. That lack of consistency taught me it’s okay to double back if you end up in a better spot. The doors nearly closed before I made it back in, but I’m confident in my decision. Most aren’t given a second chance. That, or they have to wait for the next lift to come around. I plan to use mine to further my chances of attaining a career as a software engineer.</span>

                </div>
            </div>
        </div>
    )
}

export default AboutMe
