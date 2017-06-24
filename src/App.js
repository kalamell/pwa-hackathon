import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import Nav from './Nav';
import Footer from './Footer';

import People from './People';
class App extends Component {
  render() {
    return (
        <div className="container section">
            <Nav />
            <People />
            <Footer />
        </div>
    )
  }
}

export default App;
