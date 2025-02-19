import React from "react";
import Headera from "./headera";
import Footer from "./footer";
import { useState, useEffect } from "react";
import axios from "axios";

const handleDelete = async (planeid) => {
    try{
        await axios.delete('/api/adminofbmsr/flightmstdel/'+planeid)
        window.location.reload()
    }
    catch(err){
        console.log(err);
    }
}

function Flightmst() {
    const [planeid, setPlaneid] = useState('');
    const [flightname, setFlightame] = useState('');
    const [airid,setAirid]=useState('');
    const [seat, setSeat] = useState('');
    function handel(event){
        event.preventDefault();
        axios.post('/api/adminofbmsr/flightmstins', {planeid,flightname,airid,seat})
        .then(res => {
            alert(res.data);
            window.location.reload()
        }).catch(err => alert(err)); 
    }
    const [flightmst, setflightmst] = useState([])
    useEffect(() => {
        axios.get("/api/adminofbmsr/sel")
            .then(res => setflightmst(res.data))
            .catch(err => console.log(err));
    }, [])
    const [air, setAir] = useState([])
    useEffect(() => {
        axios.get("/api/adminofbmsr/airline")
            .then(res => setAir(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <Headera />
            <br />
            <form align="center" method="POST" onSubmit={handel}>
                <h2>Add New Plane</h2>
                <div class="form-inline">
                    <label class="control-label"><u>Plane-ID:-</u></label>
                    <input required onChange={e => setPlaneid(e.target.value)} class="form-control" id="id" name="id" type="text" placeholder="Plane Id" />
                    <label class="control-label"><u>Flight Name:-</u></label>
                    <input required onChange={e => setFlightame(e.target.value)} class="form-control" id="name" name="name" type="text" placeholder="flight Name" />
                    <label className="control-label"><u>Airline-ID:-</u></label>
                        <select required onChange={e => setAirid(e.target.value)} className="form-control" id="airid" name="airid">
                            <option value="">Select a Airline Id</option>
                                {air.map((data, i) => (
                                <option key={i} value={data.id}>{data.id}-{data.name}</option>
                                ))}
                        </select>
                    <label class="control-label"><u>seat:-</u></label>
                    <input required onChange={e => setSeat(e.target.value)} class="form-control" id="seat" name="seat" type="text" placeholder="seat" />
                </div><br />
                <button class="btn btn-success" id="add" name="add">ADD</button><br /><br />
                <h2>Plane Details</h2>
            </form>
            <table class='table table-bordered table-hover'>
                <tr id="field">
                    <th>Plane Id</th>
                    <th>Flight Name</th>
                    <th>Air-line Id</th>
                    <th>Seat</th>
                    <th>Delete</th>
                </tr>
                <tbody>
                    {
                        flightmst.length > 0 ?
                            flightmst.map((data, i) => (
                                <tr>
                                    <td>{data.planeid}</td>
                                    <td>{data.flightname}</td>
                                    <td>{data.airlineid}</td>
                                    <td>{data.seat}</td>
                                    <td>
                                    <button  onClick={e => handleDelete(data.planeid)} class='btn btn-danger'>
                                            <div class='fa-solid fa-trash' style={{ color: 'black' }}></div>
                                    </button>
                                    </td>
                                </tr>
                            )) : <tr><th colSpan={10}><center>No result found</center></th></tr>
                    }
                </tbody>
            </table>
            <Footer />
        </>
    )
}
export default Flightmst