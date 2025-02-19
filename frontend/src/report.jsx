import React, { useState, useEffect } from "react";
import Headera from "./headera";
import $ from 'jquery';
import Footer from "./footer";
import axios from "axios";
// import { Link } from "react-router-dom";
function Report() {
    $(document).ready(function () {
        $("#awf").click(function () {
            $("#dwfr").hide();
            $("#table").hide();
            $("#tabled").hide();
            $("#tableda").hide();
            $("#tabledab").hide();
            $("#dawfr").hide();
            $("#dawbr").hide();
            $("#awfr").show();
        });
        $("#dwf").click(function () {
            $("#awfr").hide();
            $("#table").hide();
            $("#tabled").hide();
            $("#tableda").hide();
            $("#tabledab").hide();
            $("#dawfr").hide();
            $("#dawbr").hide();
            $("#dwfr").show();
        });
        $("#dawf").click(function () {
            $("#table").hide();
            $("#tabled").hide();
            $("#tabledab").hide();
            $("#tableda").hide();
            $("#awfr").hide();
            $("#dwfr").hide();
            $("#dawbr").hide();
            $("#dawfr").show();
        });
        $("#dawb").click(function () {
            $("#table").hide();
            $("#tabled").hide();
            $("#tabledab").hide();
            $("#tableda").hide();
            $("#awfr").hide();
            $("#dwfr").hide();
            $("#dawfr").hide();
            $("#dawbr").show();
        });
        $("#ser").click(function () {
            $("#table").show();
            $("#tabledab").hide();
            $("#tableda").hide();
            $("#tabled").hide();
        });
        $("#serd").click(function () {
            $("#table").hide();
            $("#tableda").hide();
            $("#tabledab").hide();
            $("#tabled").show();
        });
        $("#serda").click(function () {
            $("#table").hide();
            $("#tabled").hide();
            $("#tabledab").hide();
            $("#tableda").show();
        });
        $("#serdab").click(function () {
            $("#table").hide();
            $("#tabled").hide();
            $("#tableda").hide();
            $("#tabledab").show();
        });
    });
    const [airid, setAirid] = useState('');
    const [air, setAir] = useState([]);
    const [first, setFirst] = useState([]);

    useEffect(() => {
        axios.get("/api/adminofbmsr/airline")
            .then(res => setAir(res.data))
            .catch(err => console.log(err));
    }, [])

    function awf(event) {
        event.preventDefault();
        axios.post('/api/adminofbmsr/awf', { airid })
            .then(res => setFirst(res.data));
    }

    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [second, setSecond] = useState('');
    function dwf(event) {
        event.preventDefault();
        axios.post('/api/adminofbmsr/dwf', { departure, arrival })
            .then(res => setSecond(res.data));
    }

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [third, setThird] = useState('');
    function dawf(event) {
        event.preventDefault();
        axios.post('/api/adminofbmsr/dawf', { from, to })
            .then(res => setThird(res.data));
    }

    const [from1, setFrom1] = useState('');
    const [to1, setTo1] = useState('');
    const [fourth, setFourth] = useState('');
    function dawb(event) {
        event.preventDefault();
        axios.post('/api/adminofbmsr/dawb', { from1, to1 })
            .then(res => setFourth(res.data));
    }

    return (
        <div>
            <Headera />
            <br />
            <h2 align="center">Reports</h2>
            <br />
            <button className="btn topnav" style={{ color: "white" }} id="awf">Airline Wise Flight</button>
            <span> </span>
            <button className="btn topnav" style={{ color: "white" }} id="dawf">Date Wise Flight</button>
            <span> </span>
            <button className="btn topnav" style={{ color: "white" }} id="dawb">Date Wise Booking</button>
            <span> </span>
            <button className="btn topnav" style={{ color: "white" }} id="dwf">Destination Wise Flight</button>
            
            <div id="awfr" style={{ display: "none" }} className="container">
                <h4 align="center">Airline Wise Flight Report</h4><br/>
                <form method="POST" onSubmit={awf} align="center">
                    <div className="form-inline">
                        <select required onChange={e => setAirid(e.target.value)} className="form-control" id="airid" name="airid">
                            <option value="">Select a Airline Id</option>
                            {air.map((data, i) => (
                                <option key={i} value={data.id}>{data.id}-{data.name}</option>
                            ))}
                        </select>
                        <button className="btn topnav" id="ser"><i className="fa-solid fa-magnifying-glass" ></i></button>
                    </div>
                </form>
            </div>
            <br />
            <table id="table" class='table table-bordered table-hover'>
                <tr id="field">
                    <th>Flight-Id</th>
                    <th>Airline-Id</th>
                    <th>Airline-Name</th>
                    <th>Flight-Name</th>
                    <th>Depart</th>
                    <th>Return</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Economy Price</th>
                    <th>Business Price</th>
                    <th>Economy Cost</th>
                    <th>Business Cost</th>
                    <th>Available Seat</th>
                </tr>
                <tbody>
                    {
                        first.length > 0 ?
                            first.map((data, i) => (
                                <tr>
                                    <td>{data.fid}</td>
                                    <td>{data.airlineid}</td>
                                    <td>{data.name}</td>
                                    <td>{data.fname}</td>
                                    <td>{data.depart}</td>
                                    <td>{data.return}</td>
                                    <td>{data.departure}</td>
                                    <td>{data.arrival}</td>
                                    <td>{data.eprice}</td>
                                    <td>{data.bprice}</td>
                                    <td>{data.ecost}</td>
                                    <td>{data.bcost}</td>
                                    <td>{data.seat}</td>
                                </tr>
                            ))
                            : <tr><th colSpan={12}><center>Flight Not Founded</center></th></tr>
                    }
                </tbody>
            </table>


            <div id="dwfr" style={{ display: "none" }} className="container">
            <h4 align="center">Destination Wise Flight Report</h4><br/>
                <form method="POST" onSubmit={dwf} align="center">
                    <div className="form-inline">
                        <select required onChange={e => setDeparture(e.target.value)} className="form-control" id="departure" name="departure">
                            <option value="Departure" selected disabled>Source</option>
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
                        <span> </span>
                        <select required onChange={e => setArrival(e.target.value)} className="form-control" id="arrival" name="arrival">
                            <option value="Arrival" selected disabled>Destination</option>
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
                        <span> </span>
                        <button className="btn topnav" id="serd"><i className="fa-solid fa-magnifying-glass" ></i></button>
                    </div>
                </form>
            </div>
            <br />
            <table id="tabled" style={{ display: "none" }} class='table table-bordered table-hover'>
                <tr id="field">
                    <th>Flight-Id</th>
                    <th>Airline-Id</th>
                    <th>Flight-Name</th>
                    <th>Depart</th>
                    <th>Return</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Economy Price</th>
                    <th>Business Price</th>
                    <th>Economy Cost</th>
                    <th>Business Cost</th>
                    <th>Available Seat</th>
                </tr>
                <tbody>
                    {
                        second.length > 0 ?
                            second.map((data, i) => (
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
                                    <td>{data.ecost}</td>
                                    <td>{data.bcost}</td>
                                    <td>{data.seat}</td>
                                </tr>
                            ))
                            : <tr><th colSpan={12}><center>Flight Not Founded</center></th></tr>
                    }
                </tbody>
            </table>


            <div id="dawfr" style={{ display: "none" }} className="container">
            <h4 align="center">Date Wise Flight Report</h4><br/>
                <form method="POST" onSubmit={dawf} align="center">
                    <div className="form-inline">
                        <label className="control-label">From:-</label>
                        <input type="date" onChange={e => setFrom(e.target.value)} className="form-control" />
                        <span> </span>
                        <label className="control-label">To:-</label>
                        <input type="date" onChange={e => setTo(e.target.value)} className="form-control" />
                        <span> </span>
                        <button className="btn topnav" id="serda"><i className="fa-solid fa-magnifying-glass" ></i></button>
                    </div>
                </form>
            </div>
            <br />
            <table id="tableda" style={{ display: "none" }} class='table table-bordered table-hover'>
                <tr id="field">
                    <th>Flight-Id</th>
                    <th>Airline-Id</th>
                    <th>Flight-Name</th>
                    <th>Depart</th>
                    <th>Return</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Economy Price</th>
                    <th>Business Price</th>
                    <th>Economy Cost</th>
                    <th>Business Cost</th>
                    <th>Available Seat</th>
                </tr>
                <tbody>
                    {
                        third.length > 0 ?
                            third.map((data, i) => (
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
                                    <td>{data.ecost}</td>
                                    <td>{data.bcost}</td>
                                    <td>{data.seat}</td>
                                </tr>
                            ))
                            : <tr><th colSpan={12}><center>Flight Not Founded</center></th></tr>
                    }
                </tbody>
            </table>


            <div id="dawbr" style={{ display: "none" }} className="container">
            <h4 align="center">Date Wise Booking Report</h4><br/>
                <form method="POST" onSubmit={dawb} align="center">
                    <div className="form-inline">
                        <label className="control-label">From:-</label>
                        <input type="date" onChange={e => setFrom1(e.target.value)} className="form-control" />
                        <span> </span>
                        <label className="control-label">To:-</label>
                        <input type="date" onChange={e => setTo1(e.target.value)} className="form-control" />
                        <span> </span>
                        <button className="btn topnav" id="serdab"><i className="fa-solid fa-magnifying-glass" ></i></button>
                    </div>
                </form>
            </div>
            <br />
            <table id="tabledab" style={{ display: "none" }} class='table table-bordered table-hover'>
                <tr id="field">
                    <th>User-id</th>
                    <th>Flight-id</th>
                    <th>Flight-name</th>
                    <th>depart</th>
                    <th>return</th>
                    <th>departure</th>
                    <th>arrival</th>
                    <th>passanger</th>
                    <th>class</th>
                    <th>price</th>
                    <th>cost</th>
                    <th>profit</th>
                    <th>action</th>
                </tr>
                <tbody>
                    {
                        fourth.length > 0 ?
                            fourth.map((data, i) => (
                                <tr>
                                    <td>{data.userid}</td>
                                    <td>{data.fid}</td>
                                    <td>{data.fname}</td>
                                    <td>{data.depart}</td>
                                    <td>{data.return}</td>
                                    <td>{data.departure}</td>
                                    <td>{data.arrival}</td>
                                    <td>{data.passanger}</td>
                                    <td>{data.class}</td>
                                    <td>{data.price}</td>
                                    <td>{data.cost}</td>
                                    <td>{data.profit}</td>
                                    <td>{data.action}</td>
                                </tr>
                            ))
                            : <tr><th colSpan={12}><center>Flight Not Founded</center></th></tr>
                    }
                </tbody>
            </table>

            <br/><br/><br/><br/><br/><br/>
            <Footer />
        </div>
    )
}
export default Report
