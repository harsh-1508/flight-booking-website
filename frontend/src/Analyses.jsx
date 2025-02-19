import React, { useEffect, useState } from "react";
import Headera from "./headera";
import Footer from "./footer";
import axios from "axios";
import { Link } from "react-router-dom";
function Analyses() {
    const [analyses, setAnalyses] = useState([])
    useEffect(() => {
        axios.get("/api/adminofbmsr/analyses")
            .then(res => setAnalyses(res.data))
            .catch(err => console.log(err));
    }, [])
    const [analyses1, setAnalyses1] = useState([])
    useEffect(() => {
        axios.get("/api/adminofbmsr/analyses1")
            .then(res => setAnalyses1(res.data))
            .catch(err => console.log(err));
    }, [])
    const [flight, setFlight] = useState([])
    useEffect(() => {
        axios.get('/api/adminofbmsr/analyses2')
            .then(res => setFlight(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <Headera />
            <br /><br /><h2 align="center">Analyses Details</h2><br /><br />
            <table class='table table-bordered table-hover'>
                <tr id="field">
                    <th>UserId</th>
                    <th>Email</th>
                    <th>FlightId</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Passanger</th>
                    <th>Class</th>
                    <th>Price</th>
                    <th>Cost</th>
                    <th>Profit</th>
                    <th>Total Price</th>
                    <th>Total Cost</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
                <tbody>
                    {
                        analyses.map((data, i) => (
                            <tr>
                                <td>{data.userid}</td>
                                <td>{data.email}</td>
                                <td>{data.fid}</td>
                                <td>{data.departure}</td>
                                <td>{data.arrival}</td>
                                <td>{data.passanger}</td>
                                <td>{data.class}</td>
                                <td>{data.eprice}</td>
                                <td>{data.ecost}</td>
                                <td>{data.eprofit}</td>
                                <td>{data.price}</td>
                                <td>{data.cost}</td>
                                <td>{data.action === null ? "Take First" : data.action}</td>
                                <td><Link style={{ color: "black" }} to={`approve?email=${data.email}&userid=${data.userid}&id=${data.bookingid}&fid=${data.fid}`}><button style={{width:"100px"}} className="btn btn-primary"><i className="fa-solid fa-eye" style={{ color: 'black' }}/></button></Link></td>
                            </tr>
                        ))
                    }
                    {
                        analyses1.map((data, i) => (
                            <tr>
                                <td>{data.userid}</td>
                                <td>{data.email}</td>
                                <td>{data.fid}</td>
                                <td>{data.departure}</td>
                                <td>{data.arrival}</td>
                                <td>{data.passanger}</td>
                                <td>{data.class}</td>
                                <td>{data.bprice}</td>
                                <td>{data.bcost}</td>
                                <td>{data.bprofit}</td>
                                <td>{data.price}</td>
                                <td>{data.cost}</td>
                                <td>{data.action === null ? "Take First" : data.action}</td>
                                <td><Link style={{ color: "black" }} to={`approve?email=${data.email}&userid=${data.userid}&id=${data.bookingid}&fid=${data.fid}`}><button style={{width:"100px"}} className="btn btn-primary"><i className="fa-solid fa-eye" style={{ color: 'black' }}/></button></Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table><br />
            <h2 align="center">Passanger Details</h2><br /><br />
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
    )
}
export default Analyses