import React from 'react';
import { Route } from 'react-router-dom';

import SkillNav from '../navbar/SkillNav';

const Skills = () => {
    return (
        <div className="skills-main">
            <div className="title-wrap">
                <h1 className="title">Skills</h1>
            </div>
            <div>
                <SkillNav />
            </div>
            <div>
            
            </div>
        </div>
    )
}

export default Skills;