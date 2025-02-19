import React from 'react'
import './App.css'
import logo from './pics/p1.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

function Headeru() {
  const uid=Cookies.get('uid')
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
            {uid}<span> </span>
            <span className="caret"></span>
            <span> </span>
            <i className="fa fa-solid fa-right-to-bracket"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <li className="dropdown-item"><Dropdown.Item  href="/user">User</Dropdown.Item></li>
            <li className="dropdown-item"><Dropdown.Item  href="/ulogin">Logout <i class="fa-solid fa-right-to-bracket fa-rotate-180"style={{color:"black"}}></i></Dropdown.Item></li>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <nav className="topnav">
        <Link to="/user">Home</Link>
        <Link to="/allflight">AllFlight Detail</Link>
        <Link to="/myflight">MyFlight/E-Ticket Detail</Link>
        <Link to="/passanger">Passanger Detail</Link>
        <Link to="/eticket">Boarding Pass</Link>
      </nav>
    </header>);
}
export default Headeru;
