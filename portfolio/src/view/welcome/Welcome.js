import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome-main">
            <div className="title-wrap">
                <h1 className="title">Welcome!</h1>
            </div>
            <div className="welcome-wrap">
                <div className="white-div fade-in">
                    <p>
                        Hello, My name is Dakotah Hitze, and I live in the Lafayette, Indiana area.
                        I have an amazing family of 5 that I am taking care of when I am not nose-deep in 
                        my laptop either learning new things, or applying new things learned.<br/><br/>

                       I'm currently digging deep into C# code. I have been building tinker apps with either WPF, Console Apps, or Web Application.
                       Within Console Apps, I was teaching myself how to reach inside of another windows application (Excel) and call a Procedure that I had created
                       to take in data that was/had been updated in the workbook, and send an email out all without a user opening the file. It never made it into production,
                       but I had a great amount of enjoyment to see it finally work.<br/><br/>
                       
                       At work, as an Safety Coordinator, when not building policies and implementing them, I have been writing code in Visual Basic for Application. It is code that is written directly inside of a Microsoft
                       Office document. I have been turning boring Excel Workbooks into exciting pieces of work that help excel (pun intended) the business. I find it completely satisfying
                       to help out other folks in the job that they do. Within my job, I have also learned deeply about Cryogenics and the tanks that hold them. The science behind making them work
                       and not implode/explode is beyond an amazing! I have also learned an incredible amount of knowledge about the federal government's view on safety and how important it is to wach and every employee<br/><br/>

                       I have earned my OSHA 30 certificate as well as earned my FSO (Facility-Specific Operator) Operator License through the state of Indiana. I have a basic understanding of how to safely handle
                       water operations within a plant. I currently overlook 63 employees (inculding salaried memebers) in safe operations. I have turned the Incident Rate in a downward trend 20-points. I take great
                       proud in knowing each and every employee and ensure them they have a safe return home at the end of the day. They may not agree at all times but I have federal backing in the decisions that I make.<br/><br/> 

                        You can also check out some of my other projects in the <Link to="/projects">Projects</Link> tab!<br/><br/>

                        On the side are the icons for my Github, LinkedIn, and Twitter! I also have a link to my resume <a href="https://resume.creddle.io/resume/a0vgttac3y7">Here</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;