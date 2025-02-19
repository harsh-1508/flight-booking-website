import React from 'react'
import './App.css'
import logo from './pics/p1.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from "react-router-dom"

function Headera() {
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
            Harsh <span> </span>
            <span className="caret"></span>
            <span> </span>
            <i className="fa fa-solid fa-right-to-bracket"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <li className="dropdown-item"><Dropdown.Item  href="/admin">Admin</Dropdown.Item></li>
            <li className="dropdown-item"><Dropdown.Item  href="/alogin">Logout <i class="fa-solid fa-right-to-bracket fa-rotate-180"style={{color:"black"}}></i></Dropdown.Item></li>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <nav className="topnav">
        <Link to="/admin">Home</Link>
        <Link to="/report">Reports</Link>
        <Link to="/status">Change Status</Link>
        <Link to="/analyses">Approvement/Analyses Data</Link>
        <Link to="/flight_mst">Plane</Link>
        <Link to="/flight">Manage Flight</Link>
        <Link to="/airline">Air-Lines</Link>
        <Link to="/userdata">User's Data</Link>
        <Link to="/gen">Forgot QR Code</Link>
        <Link to="/backup">Backup</Link>
      </nav>
    </header>);
}
export default Headera;
