import React, { useState } from "react";
import Headeru from "./headeru";
import Footer from "./footer";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Payment(){
    const loc=useLocation();
    const amt = loc.state.amt
    const fid = loc.state.fid
    const navigate = useNavigate();
    const uid = Cookies.get('uid');
    const [cn, setCn] = useState('')
    const [chn, setChn] = useState('')
    const [cvv, setCvv] = useState('')
    const [exp, setExp] = useState('')
    function handle(event){
        event.preventDefault();
        if (cn === "") {
            alert('Enter Card No');
          }
          else if (cn.length !== 16) {
           alert('Enter vaild Card No should be only 16 digit');
          }
          else if (chn === "") {
            alert('Enter Card Holder Name');
          }
          else if (cvv === "") {
            alert('Enter cvv number');
          }
          else if (exp === ("")) {
            alert('Enter Expire Month');
          }
          else {
        axios.post('/api/userofbmsr/payment',{uid,cn,chn,cvv,exp,amt,fid})
        .then(res=>{
            alert(res.data);
            if(res.data === "success"){
                navigate('/success');
            }
        }).catch(err=>console.log(err));
    }}
    return(
    <><Headeru/>
        <br/>
        <div className="container" id="payment">
            <div id="p">
                <h2 id="p" align="center"><u>Payment</u></h2><br/>
                <div>
                Accepted Cards <br/>
                <i className="fa-brands fa-cc-visa fa-3x" style={{color:"white",backgroundColor:"purple"}}></i>
                <span> &nbsp;</span>
                <i className="fa-brands fa-cc-mastercard fa-3x" style={{color:"white",backgroundColor:"red"}}></i>
                <span> &nbsp;</span>
                <i className="fa-brands fa-cc-discover fa-3x" style={{color:"white",backgroundColor:"orange"}}></i>
                <span> &nbsp;</span>
                <i className="fa-brands fa-cc-amex fa-3x" style={{color:"white",backgroundColor:"blue"}}></i>
                </div>
                <form  method="POST" onSubmit={handle}><br/>
                        <label className="control-label"><u>Card No</u></label>
                        <input id="input" className="form-control" onChange={e => setCn(e.target.value)}  name="cn" type="number" placeholder="card no"size="26"/>
                    <br/>
                        <label className="control-label"><u>Card Holder Name</u></label>
                        <input id="input" className="form-control" onChange={e => setChn(e.target.value)}  name="chn" type="text" placeholder="card holder name"size="20"/>
                    <br/>
                        <label className="control-label"><u>CVV</u></label>
                        <input id="input" className="form-control" onChange={e => setCvv(e.target.value)}  name="cvv" type="password" placeholder="cvv"size="2"maxlength="3"/>
                    <br/>
                        <label className="control-label"><u>Expiration</u></label>
                        <input id="input" className="form-control" onChange={e => setExp(e.target.value)} name="exp" type="month"/>
                    <br/>
                    <center><button className="btn btn-success topnav"id="pay"name="pay"><i className="fa-solid fa-lock" style={{ color: 'white' }}></i> Pay {amt}</button></center><br/>
                </form> 
            </div>
        </div>
    <Footer/></>)
}
export default Payment;