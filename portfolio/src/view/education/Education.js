import React from 'react';

import lambda from '../../img/lambda.png';

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