import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav-main">
            <div className="name">
                <h1>dakotah hitze</h1>
            </div>
            <div className="nav">
                <ul className="list">
                    <li className="item">
                        <Link className="link" to="/">Front</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;