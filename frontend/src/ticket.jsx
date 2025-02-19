import React, { useEffect, useState } from "react";
import Headeru from "./headeru";
import Footer from "./footer";
import QRCode from 'qrcode.react';
import Cookie from "js-cookie";
import axios from 'axios';
import { Link } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Ticket(){
    const [flight, setFlight] = useState([]);
    
    useEffect(() => {
        const uid = Cookie.get("uid");
        const queryParameters = new URLSearchParams(window.location.search);
        const fid = queryParameters.get("fid");
        axios.post('/api/userofbmsr/ticket', { uid, fid })
            .then(res => setFlight(res.data))
            .catch(err => console.log(err));
    }, []);

    const generatePDF = () => {
        const input = document.getElementById('ticket-container');

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 300;
                const pageHeight = 295;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                let heightLeft = imgHeight;
                let position = 0;

                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                pdf.save('ticket.pdf');
            });
    };

    return (
        <>
            <Headeru/>
            <div>
                <div id="ticket-container">
                    {flight.length > 0 ? 
                        flight.map((data, i) => (
                            <><br/>
                            <div key={i} className="container" id="airlineticket">
                                <div id="pi">
                                    <h2 id="t2">Trip Easy</h2>
                                    <h4>{data.class} Class</h4>
                                    <h4>{data.name}</h4>
                                    <hr/>
                                    <label className="control-label">Flight-Name:-</label>{data.fname}
                                    <span> &nbsp; &nbsp; &nbsp; </span>&nbsp;
                                    <label className="control-label">Gate:-</label>A23
                                    <br/><br/>
                                    {data.departure}
                                    <span> &nbsp; </span>
                                    <i style={{color:"yellowgreen"}} className="fa fa-solid fa-plane"/> 
                                    <span> &nbsp; </span>{data.arrival}
                                    <br/><br/>
                                    <label className="control-label">Passenger-name:-</label>{data.passangername}
                                    <br/><br/>
                                    <i style={{color:"black"}} className="fa-solid fa-indian-rupee-sign"/>{data.p}
                                    <br/><br/>
                                    <hr style={{borderTop:"dotted 3px"}}/>
                                    <QRCode value={[data.passangername,data.fname,data.name]} bgColor="cornflowerblue" />
                                    <br/>
                                    For More Detail Check :- <Link to='/Eticket'>Bording Pass</Link>
                                </div>
                            </div></>
                        )) : (
                            <div>
                                <center>You Don't Get Approval </center>
                                <center>After Approval You Can Check It</center>
                                <center>Check Approval From:-<Link to='/myflight'>Here...</Link></center>
                                <center>If You Reject Try Next Time</center>
                            </div>
                        )
                    }
                </div>
                <br/>
                <center><button className="btn btn-success topnav" onClick={generatePDF}>Download PDF</button></center>
                <Footer/>
            </div>
        </>
    );
}

export default Ticket;

