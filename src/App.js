import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { firebaseApp } from './firebase';
import 'bulma/css/bulma.css';
import Create from './Create';
import Signup from './Signup';
import Signin from './Signin';
import Nav from './Nav';
import Footer from './Footer';
import People from './People';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
               this.setState({
                loggedIn: true
               })
            }
        });
    }
  render() {

    return (
        <Router>
            <div className="container section">
                <Nav />
                <Route exact path="/" component={People}/>
                <Route exact path="/create" render={() => (
                  this.state.loggedIn ? (
                    <Create />
                  ) : (
                    <Redirect to="/signin"/>
                  )
                )}/>

                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <Footer />
            </div>
        </Router>
    )
  }
}
/*
<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/>
*/

export default App;
