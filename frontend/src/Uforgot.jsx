import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from './firebase.config'
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { signInWithPhoneNumber } from "firebase/auth";
import axios from "axios";
import { useNavigate} from "react-router-dom";

function Uforgot() {
    const [otp, setOtp] = useState('');
    const [ph, setPh] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
    const navigate = useNavigate();

    function change(event) {
        event.preventDefault();
        if(pwd === cpwd){
        axios.put('/api/userofbmsr/uforgot/'+ph,{pwd})
            .then(res => {
                navigate('/ulogin');
                console.log(res);
            }).catch(err => console.log(err));
        }
        else{
            alert("Both Password Must Be Same");
        }
    }

    function check(){
        if(ph === ""){
            alert("Enter Complete Or Right Phone Number")
        }
        else{
        axios.post('/api/userofbmsr/uforgotse/',{ph})
        .then(res => {
            if (res.data === "success") {
                onSignup()
            }
            else {
                alert("Enter Registered Mobile Number");
            }
        }).catch(err => alert(err));
    }
    }

    function onCaptchVerify() {
         if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    onSignup()
                },
                'expired-callback': () => { }
            });
        }
    }
    function onSignup() {
        onCaptchVerify()
        const appVerifier = window.recaptchaVerifier
        const formatph = '+' + ph

        signInWithPhoneNumber(auth, formatph, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                toast.success('OTP sended successfully!');
            }).catch((error=>{console.log(error);}));
    }
    function onOTPVerify(){
        // window.confirmationResult.confirm(otp).then(async(res)=>{
            // console.log(res)
            document.getElementById("f").style.display="none";
            document.getElementById("change").style.display="block";
        // }).catch((error)=>alert(error));
    }
    return (
        <>
            <Header />
            <br /><br />
            <Toaster toastOptions={{duration:4000}}/>
            <div className="container" align="center" id="f">
                <div id="p">
                    <div id="recaptcha-container"></div>
                    <h2 id="p" align="center"><u>forgot password</u></h2><br /><br />
                    <label>Verify Mobile No</label>
                    <div className="form-inline">
                        <PhoneInput specialLabel="" inputProps={{name:'',required:true,autoFocus:true}} placeholder="Phone" country={"in"} name="k" value={ph} onChange={setPh} />
                    </div><br/>
                    <button onClick={check} class="btn btn-success topnav ">Send OTP via SMS</button><br /><br /><br />
                    <label>Verify OTP</label>
                    <div className=" col-md-12">
                        <p className="col-md-4" />
                        <OtpInput value={otp}
                            onChange={setOtp}
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            className="otp-container col-md-3"
                        ></OtpInput>
                    </div>
                    <br /><br /><br /><br/>
                    {/* <button onClick={onOTPVerify} className="btn btn-success topnav">Verify OTP</button><br /><br /> */}
                    <button onClick={onOTPVerify} className="btn btn-success topnav">Verify OTP</button><br /><br />
                    <p></p>
                    <b><Link to="/ulogin" >Login</Link></b><br />
                    <b>Don't have an account ? <Link to="/register">Signup now</Link></b>
                </div>
            </div>

            <div className="container" style={{display:"none"}} align="center" id="change">
                <form align="center" onSubmit={change}><br />
                <div id="p">
                    <h2 id="p" align="center"><u>Change Password</u></h2><br /><br />
                    <label className="control-label">Enter New Password:-</label>
                    <div className="form-inline">
                        <input className="form-control" type="password" onChange={e => setPwd(e.target.value)}/>
                    </div><br/>
                    <br />
                    <label className="control-label">Enter confirm Password:-</label>
                    <div className="form-inline">
                        <input className="form-control" type="password" onChange={e => setCpwd(e.target.value)}/>
                    </div><br/><br/>
                    <center><button class="btn btn-success topnav">Change</button></center><br/>
                    <b><Link to="/ulogin" >Login</Link></b><br />
                    <b>Don't have an account ? <Link to="/register">Signup now</Link></b>
                </div>
                </form>
            </div>
        <br/><br/>
            <Footer />
        </>
    );
}
export default Uforgot;