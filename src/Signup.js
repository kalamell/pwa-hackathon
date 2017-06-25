import React, { Component } from 'react';
import { firebaseApp } from './firebase';

import {  Link } from 'react-router-dom';

import 'bulma/css/bulma.css';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm: '',
            error: {
                message: ''
            }
        }
    }

    handleSignup() {
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error});
            })
    }

    render() {
        const style = {
            'marginTop': '60px'
        }
        return (

            <div style={style}>
            <h1>ลงทะเบียนสมัครสมาชิก</h1>
             <div className="field">
              <label className="label">Email</label>
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Email" onChange={event => { this.setState({'email': event.target.value})}} />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-warning"></i>
                </span>
              </p>
              <p className="help is-danger">{ this.state.error.message }</p>

            </div>
             <div className="field">
              <label className="label">Password</label>
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="password" placeholder="Password" onChange={event => { this.setState({ 'password': event.target.value })} } />
                <span className="icon is-small is-left">
                  <i className="fa fa-key"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-warning"></i>
                </span>
              </p>

            </div>

             <div className="field">
              <label className="label">Confirm Password</label>
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="password" placeholder="Password" onChange={event => { this.setState({ 'confirm': event.target.value })} } />
                <span className="icon is-small is-left">
                  <i className="fa fa-key"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-warning"></i>
                </span>
              </p>

            </div>




            <button className="button is-primary" onClick={() => this.handleSignup() }>ยืนยันการลงทะเบียน</button><br/><br/>
            <p className=""><Link to="/signin">เข้าสู่ระบบ</Link></p>

            </div>
        )
    }
}

export default Signup;
