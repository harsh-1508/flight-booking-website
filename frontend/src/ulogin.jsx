import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Ulogin() {
    const [uid, setUid] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate();

    function handle(event) {
        event.preventDefault();
        axios.post('/api/userofbmsr/ulogin', { uid, pwd })
            .then(res => {
                if (res.data === "success") {
                    Cookies.set('uid', uid, { expires: 7 });
                    navigate('/user');
                }
                else {
                    alert("invaid user");
                }
            }
            ).catch(err => alert(err));
    }

    return (
        <>
            <Header />
            <br />
            <div className="container" id="f">
                <div id="p"style={{marginTop:"50px"}}>
                    <h2 id="p" align="center"><u>Login</u></h2>
                    <form align="center" method="POST" onSubmit={handle}><br />
                        <div className="form-inline">
                            <label className="control-label"><i className="fa-solid fa-user" style={{ color: 'black' }}></i> User-ID:-</label>
                            <input className="form-control" onChange={e => setUid(e.target.value)} id="uid" name="uid" type="text" placeholder="User_ID" size="23" />
                        </div>
                        <br /><br />
                        <div className="form-inline">
                            <label className="control-label"><i className="fa-solid fa-lock" style={{ color: 'black' }}></i> Password:-</label>
                            <input className="form-control" onChange={e => setPwd(e.target.value)} id="pwd" name="pwd" type="password" placeholder="Enter Password" />
                        </div><br /><br />
                        <button className="btn btn-success topnav" id="sub" name="sub">Login</button><br /><br /><br />
                        <b><Link to="/uforgot" >Forgot Password ?</Link></b><br /><br />
                        <b>Don't have an account ? <Link to="/register">Signup now !</Link></b>

                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Ulogin;