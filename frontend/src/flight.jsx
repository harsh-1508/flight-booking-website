import React from "react";
import Footer from "./footer";
import $ from 'jquery';
import Headera from "./headera";
import { useState, useEffect } from "react";
import axios from "axios";

const handleDelete = async (fid) => {
    try {
        await axios.delete('/api/adminofbmsr/flightdel/' + fid)
        window.location.reload()
    }
    catch (err) {
        console.log(err);
    }
}

function Flight() {
    $(document).ready(function () {
        $("#add1").click(function () {
            $(".add").show();
            $("#add1").html("Double click to close");
        });
        $("#add1").dblclick(function () {
            $(".add").hide();
            $("#add1").html("Add new flight");
        });
        $("#x").click(function () {
            $("#s").hide();
        });
    });
    const [fid, setFid] = useState('');
    const [airid, setAirid] = useState('');
    const [fname, setFname] = useState('');
    const [depart, setDepart] = useState('');
    const [returna, setReturna] = useState('');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [eprice, setEprice] = useState('');
    const [ecost, setEcost] = useState('');
    const [bprice, setBprice] = useState('');
    const [bcost, setBcost] = useState('');
    const [seat, setSeat] = useState('');
    const [det, setDet] = useState([]);
    const [id,setId] = useState([]);

    useEffect(() => {
        axios.get("/api/adminofbmsr/sel")
            .then(res => setDet(res.data))
            .catch(err => console.log(err));
    }, [])
    const [air, setAir] = useState([])
    useEffect(() => {
        axios.get("/api/adminofbmsr/airline")
            .then(res => setAir(res.data))
            .catch(err => console.log(err));
    }, [])

    function ins(event) {
        event.preventDefault();
        axios.post('/api/adminofbmsr/flightins', { fid, airid, fname, depart, returna, departure, arrival, eprice, ecost, bprice, bcost, seat })
            .then(res => {
                alert(res.data);
                window.location.reload()
            }).catch(err => alert(err));
    }

    const [udepart, setUdepart] = useState('');
    const [ureturn, setUreturn] = useState('');

    function up(event) {
        event.preventDefault();
        axios.put('/api/adminofbmsr/flightup/' + id, { udepart, ureturn })
            .then(res => {
                window.location.reload()
            })
    }

    const [flight, setFlight] = useState([])
    useEffect(() => {
        axios.get("/api/userofbmsr/allflight")
            .then(res => setFlight(res.data))
            .catch(err => console.log(err));
    }, [])
    function ok() {
        document.getElementById('s').style.display = 'block';
    }
    function filter(){
        axios.delete('/api/adminofbmsr/filter')
        window.location.reload()
    }
    return (
        <>
            <Headera />

            <br />
            <button type="button" className="btn" id="add1">Add new flight</button>
            <span> </span>
            <button className="btn" onClick={filter} id="del" name="del">Filter</button>
            <form method="POST" onSubmit={ins}>
                <div align="center" className="add">
                    <hr className="hr" />
                    <h2>Add New Flight</h2>
                    <div className="form-inline">
                        <label className="control-label"><u>Flight-ID:-</u></label>
                        <input type="text" required onChange={e => setFid(e.target.value)}className="form-control" id="flightid" name="flightid"/>
                        <label className="control-label"><u>Airline-ID:-</u></label>
                        <select required onChange={e => setAirid(e.target.value)} className="form-control" id="airid" name="airid">
                            <option value="">Select a Airline Id</option>
                                {air.map((data, i) => (
                                <option key={i} value={data.id}>{data.id}-{data.name}</option>
                                ))}
                        </select>
                        <label className="control-label"><u>Flight-Name:-</u></label>
                        <select required onChange={e => setFname(e.target.value)} className="form-control" id="flightname" name="flightname">
                            <option value="">Select a flight</option>
                                {det.map((data, i) => (
                                <option key={i} value={data.flightname}>{data.flightname}</option>
                                ))}
                        </select>

                    </div>
                    <div className="form-inline">
                        <label className="control-label"><u>Depart:-</u></label>
                        <input required onChange={e => setDepart(e.target.value)} className="form-control" id="depart" name="depart" type="date" />
                        <label className="control-label"><u>Return:-</u></label>
                        <input onChange={e => setReturna(e.target.value)} className="form-control" id="return" name="return" type="date" />
                        <label className="control-label"><u>Departure:-</u></label>
                        <select required onChange={e => setDeparture(e.target.value)} className="form-control" id="departure" name="departure">
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
                        <label className="control-label"><u>Arrival:-</u></label>
                        <select required onChange={e => setArrival(e.target.value)} className="form-control" id="arrival" name="arrival">
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
                        <label className="control-label"><u>seat:-</u></label>
                        <select required onChange={e => setSeat(e.target.value)} className="form-control" id="airid" name="airid">
                            <option value="">Select a Seat</option>
                                {det.map((data, i) => (
                                <option key={i} value={data.seat}>{data.seat}-{data.flightname}</option>
                                ))}
                        </select>
                    </div>
                    <div className="form-inline">
                        <label className="control-label"><u>Economy Price:-</u></label>
                        <input required onChange={e => setEprice(e.target.value)} className="form-control" id="eprice" name="eprice" type="number" />
                        <label className="control-label"><u>Economy Cost:-</u></label>
                        <input required onChange={e => setEcost(e.target.value)} className="form-control" id="ecost" name="ecost" type="number" />
                        <label className="control-label"><u>Business Price:-</u></label>
                        <input required onChange={e => setBprice(e.target.value)} className="form-control" id="bprice" name="bprice" type="number" />
                        <label className="control-label"><u>Business Cost:-</u></label>
                        <input required onChange={e => setBcost(e.target.value)} className="form-control" id="bcost" name="bcost" type="number" />
                    </div><br />
                    <button className="btn btn-success" id="add" name="add" >ADD</button>
                    <hr className="hr" />
                </div>
            </form>
            <br /><h2 align="center">Flight Details</h2><br />
            <table className='table table-bordered table-hover'>
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
                    <th>Action</th>
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
                                    <td>{data.ecost}</td>
                                    <td>{data.bcost}</td>
                                    <td>{data.seat}</td>
                                    <td>
                                        <div className="form-inline">
                                            <button onClick={e => handleDelete(data.fid)} class='btn btn-danger'>
                                                <div class='fa-solid fa-trash' style={{ color: 'black' }}></div>
                                            </button><span> </span>
                                            <button class='btn btn-success' onClick={ok}>
                                                <div class='fa-solid fa-edit' onClick={e => setId(data.fid)} style={{ color: 'black' }}></div>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : <tr><th colSpan={13}><center>No result found</center></th></tr>
                    }
                </tbody>
            </table>
            <div align="center" className="container modal" id="s" style={{ display: "none" }}>
                <div className="modal-dialog modal-md">
                    <div className="modal-content card" id="update">
                        <span>
                            <div className="col-md-10"></div>
                            <button className="btn-danger col-md-2" id="x">X</button>
                        </span>
                        <form method="post" onSubmit={up}>
                            <div className="card-header">
                                <h2>Update Flight Dates</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-gruop">
                                    <label><h4>Flight-ID:-</h4></label>
                                    <input value={id} required  className="form-control" id="ufid" name="ufid" type="text" placeholder="flightid" />
                                </div>
                                <br />
                                <div className="form-gruop">
                                    <label><h4>Depart:-</h4></label>
                                    <input required onChange={e => setUdepart(e.target.value)} className="form-control" id="udepart" name="udepart" type="date" />
                                </div>
                                <br />
                                <div className="form-gruop">
                                    <label><h4>Return:-</h4></label>
                                    <input onChange={e => setUreturn(e.target.value)} className="form-control" id="ureturn" name="ureturn" type="date" />
                                </div>
                                <br /><br />
                                <div className="row">
                                    <div className="col-12" style={{ textalign: "center" }}>
                                        <button className="btn btn-success topnav" id="up" name="up" >UPDATE</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Flight