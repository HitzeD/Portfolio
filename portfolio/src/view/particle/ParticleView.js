import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';

import partStyle from './particles';

const ParticleView = () => {
    return(
        <div className="particle-main">
        
            <Particles
                params={ partStyle }
            />

            <div className="title-contain">
                <div className="title">
                    <h1>Welcome</h1>
                    <h3>My name is Dakotah!</h3>
                </div>
                <div className="btn">
                    <Link className="link-btn" to='/home'>
                        <button>Enter</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default ParticleView;