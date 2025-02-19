import Footer from "./footer";
import Header from "./header";
import axios from 'axios';
import React, { useEffect, useState } from "react";

function Schedule() {
    const [flights, setFlights] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get("/api/userofbmsr/schedule")
            .then(res => setFlights(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredFlights = flights.filter((flight) => {
        return (
            flight.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
            flight.arrival.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <>
            <Header />
            <br /><h2 align="center">Today's Flight Details</h2>
            <br />
            <input type="text"  className="form-control text-center" placeholder="Search Flight From Location"  value={searchTerm} onChange={handleSearch} />
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
                    {filteredFlights.length > 0 ? (
                        filteredFlights.map((flight, index) => (
                            <tr key={index}>
                                <td>{flight.fid}</td>
                                <td>{flight.airlineid}</td>
                                <td>{flight.fname}</td>
                                <td>{flight.depart}</td>
                                <td>{flight.return}</td>
                                <td>{flight.departure}</td>
                                <td>{flight.arrival}</td>
                                <td>{flight.eprice}</td>
                                <td>{flight.bprice}</td>
                                <td>{flight.seat}</td>
                                <td>{flight.status === null ? "Status Display At On Date Of Fly" : flight.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={11}><center>No result found</center></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Footer />
        </>
    );
}

export default Schedule;
