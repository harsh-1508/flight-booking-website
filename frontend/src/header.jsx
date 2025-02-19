import React from 'react'
import './App.css'
import logo from './pics/p1.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="media-left">
        <img className="img-circle media-object" alt="logo" src={logo} height="100" width="100" />
      </div>
      <div className="media-body">
        <h3 className="media-heading text-danger">Trip Easy</h3>
        <p className="text-success">The Sky is Waiting for You😃</p>
      </div>
      <div className="media-right">
        <Dropdown>
          <Dropdown.Toggle className='btn-md' variant="danger" id="dropdown-basic">
            <i className="fa fa-solid fa-user"></i><span> </span>
            Login<span> </span>
            <span className="caret"></span>
            <span> </span>
            <i className="fa fa-solid fa-right-to-bracket"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <li className="dropdown-item"><Dropdown.Item href="/ulogin">User</Dropdown.Item></li>
            <li className="dropdown-item"><Dropdown.Item href="/alogin">Admin</Dropdown.Item></li>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <nav className="topnav">
        <Link to="/">Home</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/chatbox">Chat with AI</Link>
        <Link to="/weather">Today's Weather</Link>
        <Link to="/onairport">AT THE AIRPORT</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/feedback">Feedback</Link>
      </nav>
    </header>);
}
export default Header;
