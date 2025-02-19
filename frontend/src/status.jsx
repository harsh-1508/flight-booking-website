import axios from 'axios';
import React, { useEffect, useState } from "react";
import Footer from './footer';
import Headera from './headera';

function Status() {
    const [flights, setFlights] = useState([]);
    const [status, setStatus] = useState("");
    const [fid, setFid] = useState("");
    const statuss=status === "100" ? "Departed" : status === "50" ? "Arrived" : "Running";

    useEffect(() => {
        axios.get("/api/userofbmsr/schedule")
            .then(res => setFlights(res.data))
            .catch(err => console.log(err));
    }, []);
     const handelid = (e) => {
         setFid(e.target.value);
         document.getElementById("btn").style.display = "block";
     };
    function change(event) {
        event.preventDefault();
        axios.put('/api/adminofbmsr/status/'+fid,{statuss})
        .then(res => {
            console.log(res);
        })
    }

    return (
        <>
            <Headera />
            <br /><h2 align="center">Today's Flight Check It</h2>
            <h5 align="center">0-Running,50-Arrived,100-Departed</h5>
            <br />
            <center>
            {flights.length > 0 ? (
                flights.map((flight, index) => (
                    <>
                    <div class="flight-component">
                        <span>{flight.departure}</span>
                        <input type="range" class="flight" onChange={e => setStatus(e.target.value)}  aria-label="percentage flown" />
                        <span>{flight.arrival}</span>
                    </div>
                        <button type='button' className='btn btn-success' value={flight.fid} onClick={handelid}>click me</button>
                        <br/>
                        <br/>
                    </>
                ))
            ) : (
                <p><center>No Flight Founded Today</center></p>
            )}
            <br/>
            <span>{status}</span>
            <button id='btn' className='btn btn-success topnav' style={{display:"none"}} onClick={change}>Update:-{fid}</button>
            </center>
            <Footer />
        </>
    );
}
export default Status