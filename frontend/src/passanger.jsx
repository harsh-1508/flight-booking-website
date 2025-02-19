import Footer from "./footer";
import Headeru from "./headeru";
import Cookie from "js-cookie";
import axios from 'axios';
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Passanger() {
    const [flight, setFlight] = useState([])
    useEffect(() => {
        const uid = Cookie.get("uid")
        axios.post('/api/userofbmsr/passanger', { uid })
            .then(res => setFlight(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <Headeru />
            <br /><br /><h2 align="center">Passenger Info</h2><br /><br />
            <table class='table table-bordered table-hover'>
                <tr id="field">
                    <th>Flight-Id</th>
                    <th>User-Id</th>
                    <th>PassangerName</th>
                    <th>Gender</th>
                    <th>Age Group</th>
                    <th>price</th>
                    <th>Depart Date</th>
                    <th>Return Date</th>
                </tr>
                <tbody>
                    {
                        flight.length > 0 ?
                            flight.map((data, i) => (
                                <tr>
                                    <td>{data.fid}</td>
                                    <td>{data.userid}</td>
                                    <td>{data.passangername}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.age}</td>
                                    <td>{data.price}</td>
                                    <td>{data.depart}</td>
                                    <td>{data.return}</td>
                                </tr>
                            ))
                            : <tr><th colSpan={10}><center>No result found</center></th></tr>
                    }
                </tbody>
            </table>
            <Footer />
        </>
    );
}
export default Passanger;