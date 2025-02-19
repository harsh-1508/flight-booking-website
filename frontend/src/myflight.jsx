import Footer from "./footer";
import Headeru from "./headeru";
import Cookie from "js-cookie";
import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function MyFlight() {
    const [flight, setFlight] = useState([])
    useEffect(() => {
        const uid=Cookie.get("uid")
        axios.post('/api/userofbmsr/myflight',{uid})
            .then(res => setFlight(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <Headeru />
            <br /><br /><h2 align="center">Your Flight</h2><br /><br />
            <table class='table table-bordered table-hover'>
                <tr id="field">
                    <th>User-Id</th>
                    <th>Email</th>
                    <th>Flight-Id</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Depart</th>
                    <th>Return</th>
                    <th>Total Price</th>
                    <th>Passanger</th>
                    <th>Class</th>
                    <th>Action Detail</th>
                    <th>Plane Status</th>
                    <th>Ticket</th>
                </tr>
                <tbody>
                    {
                        flight.length > 0 ?
                            flight.map((data, i) => (
                                <tr>
                                    <td>{data.userid}</td>
                                    <td>{data.email}</td>
                                    <td>{data.fid}</td>
                                    <td>{data.departure}</td>
                                    <td>{data.arrival}</td>
                                    <td>{data.depart}</td>
                                    <td>{data.return}</td>
                                    <td>{data.price}</td>
                                    <td>{data.passanger}</td>
                                    <td>{data.class}</td>
                                    <td>{data.action === null ? "Check shortly" : data.action}</td>
                                    <td>{data.status === null ? "Status Display At On Date Of Fly" : data.status}</td>
                                    <td><Link style={{ color: "black" }} to={`ticket?fid=${data.fid}`}>Get Ticket</Link></td>
                                </tr>
                            )) 
                        : <tr><th colSpan={13}><center>No result found</center></th></tr>
                    }
                </tbody>
            </table>
            <Footer />
        </>
    );
}
export default MyFlight;