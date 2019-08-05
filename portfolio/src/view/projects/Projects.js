import React from 'react';
import { Route } from 'react-router-dom';

import ProNav from '../navbar/ProNav';
import ProjectList from './ProjectList';
import Contributions from '../contributions/Contributions';

const Projects = () => {
    return (
        <div className="projects-main">
            <div className="title-wrap">
                <h1 className="title">Projects</h1>
            </div>
            <div>
                <ProNav />
            </div>
            <div className="routes">
                <Route exact path="/home/projects" component={ProjectList} />
                <Route path="/home/projects/contributions" component={Contributions} />
            </div>
        </div>
    )
}

export default Projects;