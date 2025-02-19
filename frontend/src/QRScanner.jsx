import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from "react-router-dom";
import Header from './header';
import Footer from './footer';

const QRScanner = () => {
    const [scannedResult, setScannedResult] = useState('');
    const navigate = useNavigate();
    const handleScan = (data) => {
        if (data) {
            setScannedResult(data);
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    function ok() {
        if (scannedResult.text === 'Online_Flight_Booking_Management_System') {
            localStorage.setItem("authToken", "true");
            navigate('/admin');
        }
        else {
            alert("Wrong QR Has Been Scanned");
            navigate('/alogin');
        }
    }

    return (
        <>
            <Header />
            <div className="container" id="f">
                <center>
                    <h2>First Scan Your valid QR Code To Login</h2>
                    <div className="container" style={{ width: '300px', height: '300px' }}>
                        <QrReader
                            
                            onError={handleError}
                            onResult={handleScan}
                        /></div>
                    <p>{scannedResult.text  ? "Scanning Successfully" : "QR Move Closer To Your WebCam "}</p>
                    <br />
                    <button className="btn btn-success topnav" onClick={ok}>Login</button><br />
                </center>
            </div>
            <Footer />
        </>
    );
};

export default QRScanner;
