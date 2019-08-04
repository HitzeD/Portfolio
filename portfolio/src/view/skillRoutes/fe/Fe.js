import React from 'react';

const Fe = () => {
    return (
        <div className="fe-main">
            <div className="title-card">
                <div className="title-wrap">
                    <h1>Front-End Skills</h1>
                </div>
            </div>
            <div className="fe-wrap">
                <div className="feSkill-wrap">
                    <ul className="fe-list">
                        <li className="fe-item">HTML/CSS</li>
                        <li className="fe-item">JavaScript</li>
                        <li className="fe-item">LESS/SASS</li>
                        <li className="fe-item">React.js</li>
                        <li className="fe-item">Redux</li>
                            <ul className="redux-list">
                                <li className="redux-item">Logger</li>
                                <li className="redux-item">Thunk</li>
                            </ul>
                        <li className="fe-item">React Router</li>
                        <li className="fe-item">Axios/Fetch</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Fe;