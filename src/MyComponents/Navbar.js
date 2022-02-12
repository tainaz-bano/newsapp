// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import image from './apple-icon-180x180.png'
import { Link } from 'react-router-dom';
export  default class Navbar extends Component {
 render() {
  let {mode, toggle}= this.props;
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
           <img src={image} alt="" width="42" height="42"/>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/"><strong>Home</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business"><strong>Business</strong></Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment"><strong>Entertainment</strong></Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/general"><strong>General</strong></Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/health"><strong>Health</strong></Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/science"><strong>Science</strong></Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports"><strong>Sports</strong></Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology"><strong>Technology</strong></Link></li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={toggle} id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> <strong>Enabled</strong></label>
              </div>
          </div>
      </nav>
      </>
    )
  }
}

