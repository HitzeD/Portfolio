import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../navbar/NavBar';
import SubNav from '../navbar/SubNav';
import Welcome from '../welcome/Welcome';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Education from '../education/Education';
import Contributions from '../contributions/Contributions';
import me from '../../img/pro-pic.jpg';

class Home extends React.Component {
    state = {

    }

    render(){
        return(
            <div className="home-main">
                <NavBar />
                <div className="home-wrap">
                    <div className="left">
                        <div className="img-wrap">
                            <img src={me} alt="Me" />
                        </div>
                        <div className="bottom-left">
                            <SubNav />
                        </div>
                    </div>
                    <div className="right">
                        <Route exact path='/home' component={Welcome} />
                        <Route path='/home/skills' component={Skills} />
                        <Route path='/home/projects' component={Projects} />
                        <Route path='/home/education' component={Education} />
                        <Route path='/home/contributions' component={Contributions} />
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;