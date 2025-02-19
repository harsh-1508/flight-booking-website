import Headera from "./headera";
import Footer from "./footer";
import axios from "axios";
import React, {useEffect,useState } from "react";

function Approve() {
    const queryParameters = new URLSearchParams(window.location.search);
        const email = queryParameters.get("email");
    const [payment, setPayment] = useState([])
    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const userid = queryParameters.get("userid");
        const fid = queryParameters.get("fid");
        axios.post('/api/adminofbmsr/approve',{userid,fid})
            .then(res => setPayment(res.data))
            .catch(err => console.log(err));
    }, [])
    const subject = 'Trip Easy(Online Flight Booking Management System)';
    const [check, setCheck] = useState([])

    function change(event) {
        const queryParameters = new URLSearchParams(window.location.search);
        const id = queryParameters.get("id");
        event.preventDefault();
        axios.put('/api/adminofbmsr/approve1/'+id,{check})
            .then(res => {
                console.log(res);
            })}

        function mail(){
            try {
                axios.post('/api/adminofbmsr/send_email', {
                to: email,
                subject,
                text: "This Message Is Coming From Trip Easy(Online Flight Booking Management System) For Just Inform You Your Profile Will Be Upgraded Now You Can See It On Your MyFlight Section On Website If They Approve Then You Can Get Your E-Ticket On Website Thankyou 😃"
            }).then(res=>alert(res.data))
        //   alert('Email sent successfully');
        }
        catch (error) {
            alert('Failed to send email');
        }
    }
    return (
        <>
            <Headera />
            <br /><br /><br />
            <table class='table table-bordered table-hover'>
                <tr id="field">
                <th>UserId</th>
                <th>cardno</th>
                <th>cardholdername</th>
                <th>cvv</th>
                <th>expdate</th>
                <th>amount</th>
                </tr>
                <tbody>
                    {
                    payment.length > 0 ?
                        payment.map((data, i) => (
                            <tr>
                                <td>{data.userid}</td>
                                <td>{data.cardno}</td>
                                <td>{data.cardholdername}</td>
                                <td>{data.cvv}</td>
                                <td>{data.expdate}</td>
                                <td>{data.amount}</td>
                            </tr>
                        )):<tr><th colSpan={10}><center>No result found</center></th></tr>
                    }
                </tbody>
            </table>
            <br/><br/>
            <form method="POST" onSubmit={change} align="center">
            <div class="form-inline">
                <label class="control-label">Appruval/Check</label>
                <span>  </span> <input class="form-control" type="radio" value="Approve" name="c" onChange={e => setCheck(e.target.value)}/><label class="control-label">Approve</label>
                <span>  </span> <input  class="form-control" type="radio" value="Reject" name="c" onChange={e => setCheck(e.target.value)}/><label class="control-label">Reject</label>
                <br/><button onClick={mail} class="btn btn-success topnav"  name="submit">submit</button>
            </div>
        </form><br/><br/>
            <Footer />
        </>
    );
}
export default Approve