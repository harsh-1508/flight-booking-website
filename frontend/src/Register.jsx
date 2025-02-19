import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

function Register() {
    const [id,setId]=useState('')
    const [email,setEmail]=useState('')
    const [mono,setMono]=useState('')
    const [pwd,setPwd]=useState('')
    const [cpwd,setCpwd]=useState('')
    const navigate = useNavigate();
    function handle(event){
        event.preventDefault();
        if(pwd !== cpwd ){
            alert("Enter Both Password Same");
        }
        else if(id === ""){
            alert("Enter Id First");
        }
        else if(mono === ""){
            alert("Enter Mobile Number Pelese!");
        }
        else if(email === ""){
            alert("Enter Email first");
        }
        else if(pwd === ""){
            alert("Enter Password");
        }
        else{
          axios.post('/api/userofbmsr/register',{id,mono,email,pwd,cpwd})
          .then(res=>{
              alert(res.data);
              if(res.data === "Registered"){
              navigate('/ulogin');
              }
          }).catch(err=>console.log(err));
        }
    }
    return (
        <>
            <Header/>
            <br/>
            <div className="container" id="register">
                <div id="p">
                    <h2 id="p" align="center"><u>Register</u></h2><br/>
                    <form id="reg" method="POST"onSubmit={handle}>
                        <div>
                            <label className="control-label"><u>Enter User-ID/Name</u></label>
                            <input className="form-control" onChange={e => setId(e.target.value)} id="uid" name="uid" type="text" placeholder="User_ID/Name" size="26" />
                        </div><br/>
                        <div>
                            <label className="control-label"><u>Enter MobileNo</u></label>
                            <PhoneInput specialLabel="" inputProps={{name:'',required:true}} placeholder="Phone" country={"in"} name="k" value={mono} onChange={setMono} />
                        </div><br/>
                        <div>
                            <label className="control-label"><u>Enter Email-Id</u></label>
                            <input className="form-control" onChange={e => setEmail(e.target.value)} id="em" name="em" type="email" placeholder="Emailid" size="18" />
                        </div><br/>
                        <div>
                            <label className="control-label"><u>Enter Password</u></label>
                            <input className="form-control" onChange={e => setPwd(e.target.value)} id="pwd" name="pwd" type="password" placeholder="Enter Password" />
                        </div><br/>
                        <div>
                            <label className="control-label"><u>Enter Confrim-Password</u></label>
                            <input className="form-control" onChange={e => setCpwd(e.target.value)} id="cpwd" name="cpwd" type="password" placeholder="Re-Enter Password" />
                        </div><br/>
                        <button style={{marginLeft:100}} className="btn btn-success topnav" id="sub" name="sub">Create Account</button><br/>
                        <b>Already have an account ? <u><Link to="/ulogin">Sign in !</Link></u></b>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Register;