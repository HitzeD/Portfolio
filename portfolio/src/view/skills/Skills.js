import React from 'react';
import { Route } from 'react-router-dom';

import SkillNav from '../navbar/SkillNav';
import SkillIntro from '../skillRoutes/intro/SkillIntro';
import FrontEnd from '../skillRoutes/fe/Fe';
import BackEnd from '../skillRoutes/backend/BackEnd';

const Skills = () => {
    return (
        <div className="skills-main">
            <div className="title-wrap">
                <h1 className="title">Skills</h1>
            </div>
            <div>
                <SkillNav  />
            </div>
            <div className="routes">
                <Route exact path='/skills' component={SkillIntro} />
                <Route path='/skills/fe' component={FrontEnd} />
                <Route path='/skills/be' component={BackEnd} />
            </div>
        </div>
    )
}

export default Skills;