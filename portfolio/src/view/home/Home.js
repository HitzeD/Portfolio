import React from 'react';
import { Route, Link } from 'react-router-dom';

// Components
import NavBar from '../navbar/NavBar';
import SubNav from '../navbar/SubNav';
import Welcome from '../welcome/Welcome';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Education from '../education/Education';
import Contact from '../../components/contact/Contact';

// Images
import me from '../../img/pro-pic.jpg';
import github from '../../img/github.svg';
import linkedIn from '../../img/linkedin-logo.svg';
import twitter from '../../img/twitter-logo.svg'

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
                            <img className="img" src={me} alt="Me" />
                            <div className="social-icons">
                                <a className="link" href="https://github.com/HitzeD/" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="octocat" />
                                </a>
                                <a className="link" href="https://www.linkedin.com/in/dakotah-hitze-2a9042100/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedIn} alt="LinkedIn" />
                                </a>
                                <a className="link" href="https://twitter.com/DakotahHitze" target="_blank" rel="noopener noreferrer">
                                    <img src={twitter} alt="Twitter" />
                                </a>
                            </div>
                        </div>
                        <div className="bottom-left">
                            <SubNav />
                            <div className="attribution">Icons made by <a href="https://www.flaticon.com/authors/hand-drawn-goods" title="Hand Drawn Goods">Hand Drawn Goods</a>, <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                        </div>
                    </div>
                    <div className="right">
                        <Route exact path='/' component={Welcome} />
                        <Route path='/skills' component={Skills} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/education' component={Education} />
                        <Route path='/contact' component={Contact} />
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;



