import React from "react";
import Header from "./header";
import Footer from "./footer";
import img1 from './pics/img1.png';
import img2 from './pics/img2.png';
import img3 from './pics/img3.png';
import img4 from './pics/img4.png';
import img5 from './pics/img5.png';
function Onairport() {
    return (
        <>
            <Header />
            <body>
                <div className="container">
                <h1 style={{color:'#ea4d2a'}}>AT THE AIRPORT</h1>
                    <div id="airport">
                       <h2>When You Reach the Airport</h2>
                       <br/>
                       We are committed to making you feel like royalty by offering facilities to ensure a smooth journey. Check out the on-ground services we offer, including web and city check-in. 
                       
                    </div>

                    <div id="airport">
                        <img id="img1" src={img1} height="245px" width="400px" alt="" />
                       <h2>Hassle-free check-in</h2>
                       <br/>
                       Learn more about how you can check in using the Air India website from anywhere. We provide a range of facilities to make your journey easy and comfortable. Check out how easy it is to check in for your domestic or international flight.
                    </div>

                    <div id="airport">
                        <img id="img2" src={img2} height="285px" width="400px" alt="" />
                       <h2>Metro station services</h2>
                       <br/>
                       We have designated customer service counters at certain airport metro stations. Please get in touch with our customer services staff for any assistance or information that you require. Transfer desks are also available at the metro stations to facilitate the transfer of passengers and baggage between connecting flights on our network.
                    </div>

                    <div id="airport">
                        <img id="img1" src={img3} height="201px" width="400px" alt="" />
                       <h2>Tips & reminders for the day of travel</h2>
                       <br/>
                       Check out our pre-trip tips and recommendations that will come in handy to avoid last-minute emergencies. Find information on prohibited items, baggage allowance, and much more.
                    </div>

                    <div id="airport">
                        <img id="img2" src={img4} height="202px" width="400px" alt="" />
                       <h2>Airport information</h2>
                       <br/>
                       For information on facilities and lounges, inter-terminal transfer, and ground transportation for the airports you're flying into and out of, visit our airport information pages. 
                    </div>

                    <div id="airport">
                        <img id="img1" src={img5} height="245px" width="400px" alt="" />
                       <h2>Find your lounge</h2>
                       <br/>
                       Are you looking for a lounge? Please enter an airport name in our lounge finder to get a list of airport lounges available for Air India guests. You'll also find terminal locations, hours of operation, amenities, and access policies to plan your lounge time. 
                    </div>
                </div>
            </body >
            <Footer />
        </>
    )
}
export default Onairport