import React from 'react';
import { Link } from 'react-router-dom';

const SkillNav = () => {
    return (
        <div className="tabs">

            <Link className="link" to='/projects'>
                <h1>Projects</h1>
            </Link>

            <Link className="link" to='/projects/contributions'>
                <h1>Contributions</h1>
            </Link>

        </div>
    )
}

export default SkillNav;