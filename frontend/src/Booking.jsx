import Headeru from "./headeru";
import Footer from "./footer";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
    const queryParameters = new URLSearchParams(window.location.search)
    const userid = queryParameters.get("userid");
    const fid = queryParameters.get("fid");
    let passanger = queryParameters.get("passanger");
    const psg = queryParameters.get("passanger");
    const clas = queryParameters.get("clas");
    const eprice = queryParameters.get("eprice");
    const bprice = queryParameters.get("bprice");
    const ecost = queryParameters.get("ecost");
    const bcost = queryParameters.get("bcost");
    const seat = queryParameters.get("seat");
    const useat = seat - psg;

    const price = clas === "Economy" ? eprice : bprice;
    const cost = clas === "Economy" ? ecost : bcost;

    const tprice = passanger * price;
    const tcost = passanger * cost;

    const [p, setP] = useState(passanger);
    const [pn, setPn] = useState('')
    const [gen, setGen] = useState('')
    const [age, setAge] = useState('')

    const navigate = useNavigate();

    const [occupiedSeats, setOccupiedSeats] = useState([]);

    const fetchOccupiedSeats = async () => {
        try {
            const response = await axios.post('/api/userofbmsr/seats', { fid });
            setOccupiedSeats(response.data);
        } catch (error) {
            console.error('Error fetching occupied seats:', error);
        }
    };

    function handle(event) {
        setP(p - 1)
        event.preventDefault();
        axios.post('/api/userofbmsr/enpan', { userid, fid, pn, gen, age, price })
            .then(res => {
                console.log(res);
            }).catch(err => alert("Enter All Detail's First"));
        setPn(''); setAge('');
    }
    if (p === 0) {
        if (clas === "Business" && fid.startsWith("10")) {
            document.getElementById("h").style.display = "block";
            fetchOccupiedSeats();
        } else {
            document.getElementById("btn").style.display = "block";
        }
    }
    function book() {
        axios.put('/api/userofbmsr/upbookseat/'+fid,{useat})
            .then(res => {
                console.log(res);
                book2();
            })
    }
    function book2() {
        axios.post('/api/userofbmsr/booking', { userid, fid, psg, clas, tprice, tcost })
            .then(res => {
                console.log(res);
                navigate('/payment', { state: { amt: tprice , fid: fid} });
            })
    }

    const forms = Array.from({ length: p }, () => <div className="container" id="f">
        <div id="p">
            <h2 id="p" align="center"><u>Booking</u></h2>
            <form align="center" method="POST" onSubmit={handle}><br />
                <div class="form-inline">
                    <p>Passanger:-</p>
                    <label class="control-label"><u>Passenger Name:-</u></label>
                    <input onChange={e => setPn(e.target.value)} value={pn} class="form-control" name="pn" type="text" /><br /><br />
                    <label class="control-label"><u>Gender:-</u></label>
                    <input onChange={e => setGen(e.target.value)} name="gen" type="radio" value="Male" size="7" />Male<input onChange={e => setGen(e.target.value)} name="gen" type="radio" value="Female" size="7" />Female<br /><br />
                    <label class="control-label"><u>Age Group:-</u></label>
                    <select onChange={e => setAge(e.target.value)} value={age} class="form-control" id="departure" name="age">
                        <option value="Age Group" selected disabled>Age Group</option>
                        <option value="child">Child</option>
                        <option value="adult">Adult</option>
                    </select><br /><br />
                    <label class="control-label"><u>Price:-</u></label>
                    <input class="form-control" name="pr" type="text" size="6" disabled value={price} /><br /><br />
                    <button onClick={handle} class="btn btn-success topnav" id="sub1" name="sub1">Add</button><br /><br />
                </div>
            </form>
        </div>
    </div>
    );

    const [selectedSeats, setSelectedSeats] = useState([]);
    

    const handleSeatSelect = (seatNumber) => {
        if (!selectedSeats.includes(seatNumber)) {
            setSelectedSeats([...selectedSeats, seatNumber]);
        } else {
            setSelectedSeats(selectedSeats.filter(s => s !== seatNumber));
        }
    };

    const handleUpdateSeats = async () => {
        try {
            const a=Object.keys(selectedSeats).length;
            if(a>psg){
                alert("You Can Not Select The Seat More Than Your Passanger");
            }
            else if(a<psg){
                alert("You Can Not Select The Seat Less Than Your Passanger");
            }
            else{
            await axios.post('/api/userofbmsr/selectseat', {
                seats: selectedSeats, fid, userid
            });
            document.getElementById("f").style.display = "none";
            document.getElementById("btn").style.display = "block";
            setSelectedSeats([]);
            fetchOccupiedSeats();
         }
        }
          catch (error) {
            console.error('Error updating seats:', error);
        }
    };

    return (
        <>
            <Headeru />
            <br />
            <div>{forms}</div>
            <div style={{ display: "none", alignContent: "center" }} id="h">
                <center id="f" className="container">

                    <h2>Seat Picker</h2>
                    <p>Selected Seats: {selectedSeats.join(', ')}</p>
                    <div>
                        <h3>Available Seats</h3><br/>
                        <div className="seat-grid">
                            {['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'].map(seat => (
                                <div
                                    key={seat}
                                    className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''} ${occupiedSeats.includes(seat) ? 'occupied' : ''}`}
                                    onClick={() => handleSeatSelect(seat)}
                                >
                                    {seat}
                                </div>
                            ))}
                        </div>
                    </div>
                    <br/><br/>
                    <button onClick={handleUpdateSeats} class="btn btn-success topnav"id="k">Update Seats</button>
                </center>
            </div>
            <center>
                <button style={{ display: "none", alignContent: "center" }} id="btn" onClick={book} class="btn btn-success topnav">Pay {tprice}</button>
            </center>
            <Footer />
        </>
    )
}
export default Booking;