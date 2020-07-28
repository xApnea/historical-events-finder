import React from 'react';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div>
        <div>
          <h1>Historical Events Tracker</h1>
        </div>
        <div>
          <h2>Events</h2>
        </div>
      </div>
    )
  }
}

export default App;