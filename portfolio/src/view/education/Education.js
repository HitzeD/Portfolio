import React from 'react';

import lambda from '../../img/lambda.png';
import purdue from '../../img/PurdueP.png';

const Education = () => {
    return (
        <div className="education-main">
            <div className="title-wrap">
                <h1 className="title">Education</h1>
            </div>
            <div className="class-wrap">

                <div className="class">
                        <div className="school">
                            <div className="school-head">
                                <img className="pImg" src={purdue} alt="Purdue University Global" />
                                <h1>Purdue University Global</h1>
                            </div>
                            <hr/>
                            <div className="school-body">
                                <p>I have been attending Full-Time at Purdue University Global While working. I am pursuing a Bachelor's Degree in 
                                    Information Technology with emphasis on Advanced Software Development.<br/> <br/>

                                    I currently hold a 4.0 CGPA with 51 credits completed out of 180. I plan on graduating with Summa Cum Laude at
                                    the end of my Bachelor's. Once finished, I plan on continuing my education into a Master's degree within the Cyber Security World. <br/><br/>

                                    Classes that I am taking include:<br/><br/>
                                </p>

                                <ul className="pList">
                                    <li className="item">Advanced Database Concepts</li>
                                    <li className="item">Networking Concepts</li>
                                    <li className="item">Advanced Software Development</li>
                                    <li className="item">Systems Analysis and Design</li>
                                    <li className="item">Project Management</li>
                                    <li className="item">Technology Infrastructure</li>
                                    <li className="item">Principals of Inforamtion System Architecture</li>
                                    <li className="item">And Many Others</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="class">
                        <div className="school">
                            <div className="school-head">
                                <img src={lambda} alt="Lambda School" />
                                <h1>Lambda School of Computer Science</h1>
                            </div>
                            <hr/>
                            <div className="school-body">
                                <p>Lambda School is a 40 week Full-Time, All-Immersive online bootcamp.
                                    They break down by the week on what you learn, Units are then broken into 4 weeks.
                                    At the end of every 3 weeks, the students do a school wide build-week where students 
                                    all over the school come together and build a project using the skills they learned over 
                                    the last 4 weeks, repeating the process 4 times making the main portion 16 weeks long! <br/><br/>

                                    After that, students proceed to Lambda Labs where they work on a Full-Scale, Real-World Applications and 
                                    finish them within 8 weeks. The beginning is dedicated to planning, then into building after week 3.<br/><br/>

                                    Finally, students end in an 8 week Computer Science program. Here they cover: Intro to Python and OOP, 
                                    Algorithms, Data Structures, Hash Tables and Blockchains, Graphs and Computer Architecture.
                                </p>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Education;