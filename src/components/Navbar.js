import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink className="nav-link" to="/" >
                Home
              </NavLink>          
              </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/about" >{props.aboutText}</NavLink>
            
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
         
         <div className='d-flex'>
              <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height: '30px',width: '30px',cursor: 'pointer'}}></div>
              <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height: '30px',width: '30px',cursor: 'pointer'}}></div>
              <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height: '30px',width: '30px',cursor: 'pointer'}}></div>
              <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height: '30px',width: '30px',cursor: 'pointer'}}></div>
              
         </div>

           <div className={`form-check form-switch text-${props.mode==='light'?'dark':'white'} mx-3`}>
            <input onClick={()=>{props.toggleMode(null)}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  />
            <label className="form-check-label" HtmlFor="flexSwitchCheckChecked">Toggle mode</label>
          </div>

          
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
   
};
Navbar.defaultProps = {
    title: 'hello world',
    aboutText: 'no abouts'
};
