import React, { Component } from 'react';
import { firebaseApp } from './firebase';
import {  Redirect, Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
class Create extends Component {
    constructor(props) {
        super(props);
        firebaseApp.auth().onAuthStateChanged(user => {
            if (!user) {
               <Redirect to="/sigin" />
            }
        });
    }

    handleSubmi() {

    }
    render() {
            const style = {
                'marginTop': '60px'
            }
            return (

                <div style={style}>
                <h1>แจ้งเบาะแส</h1>
                 <div className="field">
                   <label className="label">ข้อความ</label>
                   <p className="control has-icons-left has-icons-right">
                     <input className="input" type="text" placeholder="" />
                     <span className="icon is-small is-left">
                       <i className="fa fa-edit"></i>
                     </span>
                   </p>


                 </div>
                 <div className="field">
                   <label className="label">ข้อความ</label>
                   <p className="control">
                     <textarea className="textarea" placeholder="ข้อความ"></textarea>
                   </p>
                 </div>

                <button className="button is-primary" onClick={() => this.handleSubmi() }>แจ้งเบาะแส</button>
                <p></p>
                <br/>


                </div>
            )
        }
}

export default Create;
