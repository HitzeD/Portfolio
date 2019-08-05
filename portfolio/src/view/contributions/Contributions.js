import React from 'react';

import ztm from '../../img/ztm.png';

const Contributions = () => {
    return (
        <div className="con-main">
            <div className="title-wrap">
                <h1>Contributions</h1>
            </div>
            <div className="con-wrap">

                <div className="con">
                    <div className="con-left">
                        <h2 className="title">Zero To Mastery WebPage</h2>
                        <hr/>
                        <div className="con-body">
                            <p className="con-para">
                                This was an Open Source contribution. In my early days of coding, 
                                I started my learning career buying a course on <a href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/" target="_blank" rel="noopener noreferrer">Udemy</a> 
                                by <a href="https://www.linkedin.com/in/andreineagoie/" target="_blank" rel="noopener noreferrer">Andrei Neagoie</a>. This website was by the students, for the students, 
                                to show off and build with our skills.<br/><br/>
                                
                                On mobile, the container was hard coded rather than a responsive unit. 
                                Thus it caused the content to spill out. I applied "vw" unit rather than "px".<br/><br/>
                            
                                I also recently went through, and scrubbed the page for all year dates, and 
                                dynamically improved the page by removing human error and upkeep to the page.
                                I created a function that locates all the years, and populates the field with 
                                the current year.
                            </p>
                            <div className="con-btns">
                                <a href="https://github.com/zero-to-mastery/zero-to-mastery-website">GitHub</a>
                                <a href="https://zerotomastery.io/">Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="con-img">
                        <img className="logo ztm" src={ztm} alt="Zero To Mastery Logo" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contributions;