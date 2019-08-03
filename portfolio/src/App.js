import React from 'react';
import Particles from 'react-particles-js';

import { particles } from './particles/particles';

function App() {
  return (
    <div className="App">

      <Particles 
          params={ particles }
      />

    </div>
  );
}

export default App;
