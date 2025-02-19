import Headeru from './headeru'
import Footer from './footer'
import { useState } from 'react'
import { Link } from "react-router-dom";
import $ from 'jquery'
import axios from "axios";
import Cookies from 'js-cookie';

function Index() {
  $(document).ready(function () {
    $("#l1").click(function () {
      $("#return").show();
    });
    $("#l2").click(function () {
      $("#return").hide();
    });
    $("#ser").click(function () {
      $("#f").hide();
      $("#table").show();
    });
    $("#x").click(function () {
      $("#f").show();
      $("#table").hide();
    });
  });
  const [count, setCount] = useState(1);
  if (count < 1) {
    setCount(1)
  }
  else if (count > 5) {
    setCount(5)
  }
  const inc = () => (
    setCount(count + 1)
  )
  const dec = () => (
    setCount(count - 1)
  )

  const [departure, setDeparture] = useState('')
  const [arrival, setArrival] = useState('')
  const [depart, setDepart] = useState('')
  var [returnd, setReturnd] = useState('')
  const [clas, setClas] = useState('')
  const [flight, setFlight] = useState([])

  const uid = Cookies.get('uid');

  function handle(event) {
    if (returnd === "") {
      returnd = "0000-00-00";
    }
    event.preventDefault();
    axios.post('/api/userofbmsr/', { departure, arrival, depart, returnd, count })
      .then(res => setFlight(res.data))
  }
  return (
    <>
      <Headeru />
      <br />
      <div className="container" id="f">
        <div id="p">
          <h2 id="p">Hello , Welcome {uid} <i className="fa fa-solid fa-face-smile fa-bounce fa-lg"></i></h2>
          <nav className="midnav">
            <a href="#/RoundTrip" id="l1">Round Trip</a>
            <a href="#/OneWay" id="l2">One Way</a>
          </nav>
          <br /><br />
          <form method="POST" onSubmit={handle}>
            <div className="form-inline">
              <label className="control-label col-md-6"><div className="fa fa-solid fa-plane-departure"></div> <u>From</u></label>
              <label className="control-label col-md-6"><div className="fa fa-solid fa-plane-arrival"></div> <u>To</u></label>
            </div>
            <div className="form-group">
              <div className="col-md-6">
                <select onChange={e => setDeparture(e.target.value)} className="form-control" id="departure" name="departure">
                  <option value="Departure" selected disabled>Departure</option>
                  <option value="NewDelhi">NewDelhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Ottawa">Ottawa</option>
                  <option value="London">London</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Denver">Denver</option>
                  <option value="Washington">Washington</option>
                  <option value="SanFrancisco">San Francisco</option>
                </select>
              </div>
              <div className="col-md-6">
                <select onChange={e => setArrival(e.target.value)} className="form-control" id="arrival" name="arrival">
                  <option value="Arrival" selected disabled>Arrival</option>
                  <option value="NewDelhi">NewDelhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Ottawa">Ottawa</option>
                  <option value="London">London</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Denver">Denver</option>
                  <option value="Washington">Washington</option>
                  <option value="SanFrancisco">San Francisco</option>
                </select>
              </div>
            </div>
            <div className='col-md-12'><br /></div>
            <div className="form-inline">
              <label className="control-label col-md-4" id="d"><u>Depart</u></label>
              <label className="control-label col-md-4" id="r"><u>Return</u></label>
              <label className="control-label col-md-4"><u>Class</u></label>
            </div>
            <div className="form-group">
              <div className="col-md-4">
                <input onChange={e => setDepart(e.target.value)} className="form-control" id="depart" name="depart" type="date" />
              </div>
              <div className="col-md-4">
                <input onChange={e => setReturnd(e.target.value)} className="form-control" id="return" name="return" type="date" />
              </div>
              <div className="col-md-4">
                <select onChange={e => setClas(e.target.value)} className="form-control" id="class" name="class">
                  <option value="Class" selected disabled>Class</option>
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                </select>
              </div>
            </div>
            <br></br>
            <div className='col-md-12'><br /></div>
            <label className="control-label col-md-12"><i className="fa fa-person"></i><u>Passenger</u></label>
            <div className="col-md-8">
              <button type='button' onClick={dec}>-</button>
              <span id='passanger' name='passanger'> {count} </span>
              <button type='button' onClick={inc}>+</button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-success topnav" id="ser" name="ser">Search Flight <i className="fa-solid fa-magnifying-glass" ></i></button>
            </div>
          </form>
        </div>
      </div><br />
      <table id="table" class='table table-bordered table-hover'>
        <Link id="x" class="btn btn-danger">X</Link>
        <tr id="field">
          <th>Flight-Id</th>
          <th>Airline-Id</th>
          <th>Flight-Name</th>
          <th>Depart</th>
          <th>Return</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Economy Class Price</th>
          <th>Business Class Price</th>
          <th>Booking</th>
        </tr>
        <tbody>
          {
            flight.length > 0 ?
              flight.map((data, i) => (
                <tr>
                  <td>{data.fid}</td>
                  <td>{data.airlineid}</td>
                  <td>{data.fname}</td>
                  <td>{data.depart}</td>
                  <td>{data.return}</td>
                  <td>{data.departure}</td>
                  <td>{data.arrival}</td>
                  <td>{data.eprice}</td>
                  <td>{data.bprice}</td>
                  <td><Link style={{ color: "black" }} to={`booking?userid=${uid}&fid=${data.fid}&passanger=${count}&clas=${clas}&eprice=${data.eprice}&bprice=${data.bprice}&ecost=${data.ecost}&bcost=${data.bcost}&seat=${data.seat}`}>CLICK TO BOOKING</Link></td>
                </tr>
              )) : <tr><th colSpan={10}><center>Seat/Flight Not Founded</center></th></tr>
          }
        </tbody>
      </table>
      <br />
      <Footer />
    </>
  );
}
export default Index;