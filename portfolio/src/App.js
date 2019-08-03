import React from 'react';
import { Route } from 'react-router-dom';

import Home from './view/home/Home';
import ParticleView from './view/particle/ParticleView';

class App extends React.Component {
  state = {

  }

  render(){
    return (
      <div className="App">
        <Route exact path='/' component={ParticleView} />
        <Route path='/home' component={Home} />
      </div>
    );
  }
}

export default App;
