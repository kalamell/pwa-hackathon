import React, { Component } from 'react';
import { firebaseApp } from './firebase';
import {  Redirect, Link } from 'react-router-dom';
import 'bulma/css/bulma.css';

class Signin extends Component {
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

    handleSignIn() {
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
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
            <h1>เข้าสู่ระบบ</h1>
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
            <button className="button is-primary" onClick={() => this.handleSignIn()}>เข้าสู่ระบบ</button>
            <p></p>
            <br/>
            <p className=""><Link to="/signup">ลงทะเบียนสมาชิกใหม่</Link></p>

            </div>
        )
    }
}

export default Signin;
