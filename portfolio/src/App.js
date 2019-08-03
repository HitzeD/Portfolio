import React from 'react';
import './App.scss';
import Particles from 'react-particles-js';

import { particles } from './particles/particles';

function App() {
  return (
    <div>

      <Particles 
          params={ particles }
      />

    </div>
  );
}

export default App;
