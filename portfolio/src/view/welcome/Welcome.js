import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome-main">
            <div className="title-wrap">
                <h1 className="title">Welcome!</h1>
            </div>
            <div className="welcome-wrap">
                <div className="white-div">
                    <p>
                        Hello, My name is Dakotah Hitze, and I live in the Lafayette, Indiana area.
                        I have an amazing family of 4 that I am taking care of when I am not nose-deep in 
                        my laptop either learning new things, or applying new things learned.<br/><br/>

                        My next project will be a Front and Back end ordering system of school supplies. 
                        A school can participate, and add teachers to their list. Parents can sign a student 
                        up in the system to participate. Teachers can then add all supplies needed for their 
                        class. Once the school assigns a student to a teacher, school supplies will automatically 
                        be ordered and sent to the school for the first day.<br/><br/>

                        You can also check out some of my other projects in the <Link to="/home/projects">Projects</Link> tab!<br/><br/>

                        On the side are the icons for my Github, LinkedIn, and Twitter! I also have a link to my resume <a href="https://resume.creddle.io/resume/a0vgttac3y7">Here</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;