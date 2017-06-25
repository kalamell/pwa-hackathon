import React, { Component } from 'react';
import { Link, Match, Miss } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="nav section" id="top">
                <div className="container">
                    <div className="nav-left logo">
                      <a><img src="logo.png" alt="Description" />
                      </a>
                    </div>
                    <span className="nav-toggle">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                    <div className="nav-right nav-menu">
                    <Link to="/" className="nav-item is-tab is-active">หน้าหลัก</Link>
                    <Link to="/create"  className="nav-item is-tab">แจ้งเบาะแส</Link>
                    </div>
                  </div>
            </nav>
        )
    }
}

export default Nav;