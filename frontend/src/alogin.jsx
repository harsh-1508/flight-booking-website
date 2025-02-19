import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Alogin() {
    const [id, setid] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate();

    function handle(event) {
        event.preventDefault();
        axios.post('/api/adminofbmsr/alogin', { id, pwd })
            .then(res => {
                if (res.data === "success") {
                    navigate('/scan');
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
                <div id="p" style={{marginTop:"100px"}}>
                    <h2 id="p" align="center"><u>Admin Login</u></h2><br/>
                    <form align="center" method="POST" onSubmit={handle}><br />
                        <div className="form-inline">
                            <label className="control-label"><i className="fa-solid fa-user" style={{ color: 'black' }}></i> User-ID:-</label>
                            <input className="form-control" onChange={e => setid(e.target.value)} id="id" name="id" type="text" placeholder="User_ID" size="23" />
                        </div>
                        <br /><br />
                        <div className="form-inline">
                            <label className="control-label"><i className="fa-solid fa-lock" style={{ color: 'black' }}></i> Password:-</label>
                            <input className="form-control" onChange={e => setPwd(e.target.value)} id="pwd" name="pwd" type="password" placeholder="Enter Password" />
                        </div><br /><br />
                        <button className="btn btn-success topnav" id="sub" name="sub">Scan</button><br /><br /><br />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Alogin;