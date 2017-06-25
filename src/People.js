import React, { Component } from 'react';
import db from './firebase';
class People extends Component
{
    render() {
        const divStyle = {
            'marginRight': '2px',
            'color': '#fff',
        }
        return (
            <div className="columns">
                <div className="column is-3">
                    <div className="card">
                      <header className="card-header">
                        <p className="card-header-title">
                          เด็กชายงามดี บุญสำรวม <br />
                          หายมาแล้ว 300 วัน
                        </p>

                      </header>
                      <div className="card-image">
                        <figure className="image is-3by4">
                          <img src="https://placehold.it/1280x960" alt="Image" />
                        </figure>
                      </div>
                      <footer className="card-footer">
                          <p className="card-footer-item">
                            <span><a href="">แจ้งเบาะแส</a></span>
                          </p>
                          <p className="card-footer-item">
                            <a href="" className="button is-info" style={divStyle}><i className="fa fa-facebook"></i></a>
                            <a href="" className="button is-success"><i className="fa fa-twitter"></i></a>
                          </p>
                        </footer>
                    </div>
                  </div>

            </div>
        )
    }
}

export default People;