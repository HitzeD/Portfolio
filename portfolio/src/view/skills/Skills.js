import React from 'react';
import { Route } from 'react-router-dom';

import SkillNav from '../navbar/SkillNav';
import SkillIntro from '../skillRoutes/intro/SkillIntro';
import FrontEnd from '../skillRoutes/fe/Fe';
import BackEnd from '../skillRoutes/backend/BackEnd';
import Safety from '../skillRoutes/safety/Safety';

const Skills = () => {
    return (
        <div className="skills-main">
            <div className="title-wrap">
                <h1 className="title bounce-top">Skills</h1>
            </div>
            <div>
                <SkillNav  />
            </div>
            <div className="routes">
                <Route exact path='/skills' component={SkillIntro} />
                <Route path='/skills/fe' component={FrontEnd} />
                <Route path='/skills/be' component={BackEnd} />
                <Route path='/skills/safety' component={Safety} />
            </div>
        </div>
    )
}

export default Skills;