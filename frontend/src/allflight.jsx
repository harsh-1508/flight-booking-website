import React, { useEffect, useState } from "react";
import axios from 'axios';
import Headeru from "./headeru";
import Footer from "./footer";

function Allflight() {
    const [flight, setFlight] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get("/api/userofbmsr/allflight")
            .then(res => setFlight(res.data))
            .catch(err => console.log(err));
    }, []);

    const filteredFlights = flight.filter(data => {
        return (
            (typeof data.departure === 'string' && data.departure.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (typeof data.arrival === 'string' && data.arrival.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <>
            <Headeru />
            <br /><h2 align="center">Flight Details</h2><br/>
            <input type="text"  className="form-control text-center" placeholder="Search Flight From Location"  onChange={(e) => setSearchTerm(e.target.value)}  />
            <br/>
            <table className='table table-bordered table-hover'>
                <thead id="field">
                    <tr>
                        <th>Flight-Id</th>
                        <th>Airline-Id</th>
                        <th>Flight-Name</th>
                        <th>Depart</th>
                        <th>Return</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Economy Class Price</th>
                        <th>Business Class Price</th>
                        <th>Available Seat</th>
                        <th>Plane Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFlights.length > 0 ?
                        filteredFlights.map((data, i) => (
                            <tr key={i}>
                                <td>{data.fid}</td>
                                <td>{data.airlineid}</td>
                                <td>{data.fname}</td>
                                <td>{data.depart}</td>
                                <td>{data.return}</td>
                                <td>{data.departure}</td>
                                <td>{data.arrival}</td>
                                <td>{data.eprice}</td>
                                <td>{data.bprice}</td>
                                <td>{data.seat}</td>
                                <td>{data.status === null ? "Status Display At On Date Of Fly" : data.status}</td>
                            </tr>
                        )) :
                        <tr><td colSpan={10}><center>No result found</center></td></tr>
                    }
                </tbody>
            </table>
            <Footer />
        </>
    );
}

export default Allflight;
