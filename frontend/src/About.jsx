import React from "react";
import Header from "./header";
import Footer from './footer';
import ab from './pics/ab.png';
import san from './pics/san.jpg';
import tor from './pics/tor.jpg';
import ott from './pics/ott.jpg';
import dub from './pics/dub.jpg';
import nd from './pics/nd.jpg';
import mum from './pics/mum.jpg';
import ch from './pics/ch.jpg';
import wha from './pics/wha.jpg';
import $ from "jquery";
function About() {
    $(document).ready(function () {
        $("#a").click(function () {
            $("#info").hide();
            $("#card").show();
        });
        $("#b").click(function () {
          $("#card").hide();
          $("#info").show();
        });
      });
    return (
        <>
        <Header/>
        <center>
            <img alt="not-found" src={ab} style={{height: 250,width: 900}} />
            <div>
                <div className="ab">
                    <anchor className="btn btn-sm" id="a" >Top Destination</anchor>
                    <anchor className="btn btn-sm" id="b" >Details Website</anchor>
                </div>
                <br />
                <div id="info">
                    <p>Hello,Welcome to Trip Easy.
                        <br />
                        This Website started by Harsh Patel.
                        <br />
                        This website build in 25<sup>th</sup> june 2023.
                        <br />
                        Trip Easy is a fully sequre website for flight booking.
                        <br />
                        I have a best deal for your enjoyment.
                        <br />
                        This website goal is safe & happy journey.
                        <br />
                        I hope you are book your flight with us.
                        <br />
                        If you have any query related to flight or booking plese check contect-us.
                        <br />
                    </p>
                </div>
                <br />
                <br />
                <div id="card">
                    <div className="container">
                        <div className="card">
                            <div className="col-md-3">
                                <div className="box-shadow">
                                    <img alt="not-found" src={san} height="153" width="229" />
                                    <div className="card-body">
                                        <i className="card-text">San Francisco</i>
                                        <br />
                                        <small className="text-muted">4 votes</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-shadow">
                                    <img alt="not-found" src={tor} height="153" width="229" />
                                    <div className="card-body">
                                        <i className="card-text">Toronto</i><br />
                                        <small className="text-muted">4.9 votes</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-shadow">
                                    <img alt="not-found" src={ott} height="153" width="229" />
                                    <div className="card-body">
                                        <i className="card-text">Ottawa</i>
                                        <br />
                                        <small className="text-muted">4.7 votes</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-shadow">
                                    <img alt="not-found" src={dub} height="153" width="229" />
                                    <div className="card-body">
                                        <i className="card-text">Dubai</i><br />
                                        <small className="text-muted">5 votes</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="container">
                        <div className="card">
                            <div className="col-md-3">
                                <div className="box-shadow">
                                    <img alt="not-found" src={nd} height="153" width="229" />
                                    <div className="card-body">
                                        <i className="card-text">NewDelhi</i>
                                        <br />
                                        <small className="text-muted">4.7 votes</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-shadow">
                                    <img alt="not-found" src={mum} height="153" width="229" />
                                    <div className="card-body">
                                        <i className="card-text">Mumbai</i><br />
                                        <small className="text-muted">4.9 votes</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-shadow">
                                    <img alt="not-found" src={ch} height="153" width="229" />
                                    <div className="card-body">
                                        <i className="card-text">Chennai</i>
                                        <br />
                                        <small className="text-muted">4 votes</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-shadow">
                                    <img alt="not-found" src={wha} height="153" width="229" />
                                    <div className="card-body">
                                        <i className="card-text">Washington</i><br />
                                        <small className="text-muted">3.5 votes</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
        <Footer/>
        </>
    )
}
export default About;