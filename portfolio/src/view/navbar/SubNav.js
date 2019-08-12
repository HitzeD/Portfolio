import React from 'react';
import { Link } from 'react-router-dom';


const SubNav = () => {
    return (
        <div className="sub-nav">
            <ul className="list">
                <li className="item">
                    <Link className="link" to='/'>Welcome!</Link>
                </li>
                <li className="item">
                    <Link className="link" to='/skills'>Skills</Link>
                </li>
                <li className="item">
                    <Link className="link" to='/projects'>Projects</Link>
                </li>
                <li className="item">
                    <Link className="link" to='/education'>Education</Link>
                </li>
                {/* <li className="item">
                    <Link className="link" to='/contact'>Contact</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default SubNav;