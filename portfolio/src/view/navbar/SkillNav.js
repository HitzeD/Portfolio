import React from 'react';
import { Link } from 'react-router-dom';

const SkillNav = () => {
    return (
        <div className="tabs">

            <Link className="link" to='/skills'>
                <h1>General</h1>
            </Link>

            <Link className="link" to='/skills/fe'>
                <h1>Front-End</h1>
            </Link>

            <Link className="link" to='/skills/be'>
                <h1>Back-End</h1>
            </Link>

        </div>
    )
}

export default SkillNav;