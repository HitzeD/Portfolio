import React from 'react';

import mympy from '../../img/MIMPYlogo.svg';
import immuno from '../../img/immunot.png';

const ProjectList = () => {
    return (
        <div className="list-main">
            <div className="title-wrap">
                <h1>Projects</h1>
            </div>
            <div className="pro-wrap">


                <div className="project">
                    <div className="pro-img">
                        <img className="logo" src={mympy} alt="Mympy Logo" />
                    </div>
                    <div className="pro-right">
                        <h2 className="title">MyMpy Dreams</h2>
                        <hr/>
                        <div className="pro-body">
                            <p className="pro-para">
                                Mympy Dreams is a marketplace where individuals can create 
                                a profile and post their project and needs and find funding 
                                from the Mymphy Dreams community.<br/><br/>

                                Still Currently under development, and will be updated daily!
                            </p>
                            <div className="pro-btns">
                                <a href="https://github.com/mympy-dreamers/Frontend">Front-End GitHub</a>
                                <a href="https://github.com/mympy-dreamers/Backend">Back-End GitHub</a>
                                <a href="https://mympydreamers.netlify.com/">Live Site</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="project">
                    <div className="pro-img">
                        <img className="logo" src={immuno} alt="ImmunoTracker Logo" />
                    </div>
                    <div className="pro-right">
                        <h2 className="title">ImmunoTracker</h2>
                        <hr/>
                        <div className="pro-body">
                            <p className="pro-para">
                                This was the project I was assigned on my first build week at Lambda 	School. 
                                My part of this was to create a marketing page that linked over via a button to 
                                a React app created by the Front-End and Back-End Engineers. On the Home tab, I designed 
                                a marketing page to 'sell our app' to the consumer. I used Javascript for the menu button. 
                                I added an amination to the menu button which showcases animations.<br/><br/>

                                On the About page, I was given the chance to write a statement, which was submitted by the 
                                team. I added real Github links, and used the photos from Github as well. I enjoyed building 
                                the accordion. It is a reusable accordion in the about page of my website that takes in an image, 
                                title, name, and bio. With all components, the accordion successfully hides and shows the appropriate 
                                content at the appropriate time.
                            </p>
                            <div className="pro-btns">
                                <a href="https://github.com/immunizationtracking/userinterface">GitHub</a>
                                <a href="https://immunot.netlify.com/">Live Site</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProjectList;