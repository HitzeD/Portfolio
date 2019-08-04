import React from 'react';

const SkillIntro = () => {
    return (
        <div className="skillIntro-wrap">
            <div className="title-card">
                <div className="title-wrap">
                    <h1>Skills Home</h1>
                </div>
            </div>
            <div className="skills-wrap">
                <div className="general">
                    <div className="gen-wrap">
                        <h3>General Skills</h3>
                        <hr/>
                        <ul className="gen-list">
                            <li className="gen-item">Git</li>
                            <li className="gen-item">CLI</li>
                            <li className="gen-item">AJAX</li>
                            <li className="gen-item">HTTP</li>
                            <li className="gen-item">Netlify</li>
                            <li className="gen-item">Heroku</li>
                            <li className="gen-item">RESTful API</li>
                        </ul>
                    </div>            
                </div>
                <div className="practices">
                    <div className="practice-wrap">
                        <h3>Practices</h3>
                        <hr/>
                        <ul className="practice-list">
                            <li className="practice-item">Object-Oriented Programming</li>
                            <li className="practice-item">Agile</li>
                            <li className="practice-item">Scrum</li>
                        </ul>
                    </div> 
                </div>
                
            </div>
        </div>
    )
}

export default SkillIntro;