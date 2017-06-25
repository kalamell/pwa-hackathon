import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Create from './Create';
import Nav from './Nav';
import Footer from './Footer';

import People from './People';
class App extends Component {
  render() {
    return (
            <Router>
                <div className="container section">
                    <Nav />
                    <Route exact path="/" component={People}/>
                    <Route path="/create" component={Create}/>
                    <Footer />
                </div>
            </Router>
    )
  }
}

export default App;
