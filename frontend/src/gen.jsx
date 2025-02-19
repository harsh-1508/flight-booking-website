import React from 'react';
import QRCode from 'qrcode.react';
import Headera from './headera';
import Footer from './footer';

class Gen extends React.Component {
  render() {
    const qrData = "Online_Flight_Booking_Management_System";
    return (
      <>
      <Headera/>
      <br/>
      <center><div className='container'>
        <QRCode value={qrData} />
      </div></center><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer/>
      </>
    );
  }
}

export default Gen;
