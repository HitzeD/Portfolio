import React from 'react';
import { Link } from 'react-router-dom';


const SubNav = () => {
    return (
        <div className="sub-nav">
            <ul className="list">
                <li className="item">
                    <Link className="link" to='/home'>Welcome!</Link>
                </li>
                <li className="item">
                    <Link className="link" to='/home/skills'>Skills</Link>
                </li>
                <li className="item">
                    <Link className="link" to='/home/projects'>Projects</Link>
                </li>
                <li className="item">
                    <Link className="link" to='/home/education'>Education</Link>
                </li>
                <li className="item">
                    <Link className="link" to='/home/contributions'>Contributions</Link>
                </li>
            </ul>
        </div>
    )
}

export default SubNav;