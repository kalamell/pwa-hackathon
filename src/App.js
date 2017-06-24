import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import Nav from './Nav';
class App extends Component {
  render() {
    return (
        <div className="container section">
            <Nav />
        </div>
    )
  }
}

export default App;
