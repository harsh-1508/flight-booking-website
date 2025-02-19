import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookie from "js-cookie";
import QRCode from 'qrcode.react'; 
import Footer from "./footer";
import Headeru from "./headeru";
import ticket from './pics/tickets.png';

function Eticket() {
    const [flight, setFlight] = useState([]);
    const [businessSeats, setBusinessSeats] = useState(new Set());
    const [selectedFlightName, setSelectedFlightName] = useState("");

    useEffect(() => {
        const uid = Cookie.get("uid");

        axios.post('/api/userofbmsr/eticket', { uid })
            .then(res => setFlight(res.data))
            .catch(err => console.log(err));

        axios.post('/api/userofbmsr/eticket1', { uid })
            .then(res => {
                const businessSeatsData = res.data.filter(data => data.class === "Business" && data.fid.startsWith("10"));
                if (businessSeatsData.length > 0) {
                    const seatNumbers = new Set(businessSeatsData.map(seat => seat.seat_number));
                    setBusinessSeats(seatNumbers);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handleSelectChange = (e) => {
        setSelectedFlightName(e.target.value);
    };

    return (
        <>
            <Headeru />
            <br /><br /><h2 align="center">Boarding Pass/E-Tickets</h2><br />
            <div>
                <div align="center" className="container form-inline">
                <select onChange={handleSelectChange} className="form-control text-center">
                    <option value="">Select Boarding On Name Or Location</option>
                    {flight.map((data, i) => (
                        <option key={i} value={data.arrival}>{data.fname}/{data.departure}-{data.arrival}</option>
                    ))}
                </select>
                </div>
                {
                    flight.filter((data) =>
                        data.arrival.toLowerCase().includes(selectedFlightName.toLowerCase())
                    ).length > 0 ?
                        flight.filter((data) =>
                            data.arrival.toLowerCase().includes(selectedFlightName.toLowerCase())
                        ).map((data, i) => (
                            <div key={i}>
                                <br />
                                <div className="container" id="f">
                                    <div className="col-md-8" id="pi">
                                        <h2>Online Flight Booking</h2><h4>{data.class} Class / {data.name}</h4>
                                        <hr />
                                        <label className="control-label col-md-5"><u>FLIGHT NAME</u></label>
                                        <label className="control-label col-md-4"><div className="fa-solid fa-plane-departure"></div> <u>FROM</u></label>
                                        <label className="control-label col-md-3"><div className="fa-solid fa-plane-arrival"></div> <u>TO</u></label><br />
                                        <div className='col-md-5'>{data.fname}</div>
                                        <div className='col-md-4'>{data.departure}</div>
                                        <div className='col-md-3'>{data.arrival}</div><br /><br /><br />
                                        <label className="control-label col-md-7"><u>PASSENGER NAME</u></label>
                                        <label className="control-label col-md-5"><u>BOARD TIME</u></label><br />
                                        <div className='col-md-7'>{data.passangername}</div>
                                        <div className='col-md-5'>5:45</div><br /><br />
                                        <label className="control-label col-md-4"><u>DEPART DATE</u></label>
                                        <label className="control-label col-md-5"><u>RETURN DATE</u></label>
                                        <label className="control-label col-md-3"><u>GATE</u></label><br />
                                        <div className='col-md-4'>{data.depart}</div>
                                        <div className='col-md-5'>{data.return}</div>
                                        <div className='col-md-3'>A23</div>
                                        <center><br /><br /><br />
                                            <label className="control-label"><u>Your Seat</u></label>
                                            {data.class === "Business" && <div>{Array.from(businessSeats).join(", ")}</div>}
                                        </center>
                                    </div>
                                    <div className="col-md-4" id="part">
                                        <p><h3>Trip Easy</h3></p>
                                        <img alt="ticket" src={ticket} width={225} height={225} style={{ mixBlendMode: "color-burn" }} />
                                        Please be at the gate at
                                        boarding time.<br />
                                        <QRCode value={[data.passangername, data.fname, data.name]} bgColor="royalblue" />
                                        <br /><center>Thank you for choosing us...</center>
                                    </div>
                                </div>
                            </div>
                        )) : 
                        <c><center>You Don't Get Approval </center>
                        <center>After Approval You Can Check It</center>
                        <center>Check Approval From:-<Link to='/myflight'>Here...</Link></center>
                        <center>If You Reject Try Next Time</center></c>
                }
            </div>
            <br />
            <Footer />
        </>
    );
}
export default Eticket;