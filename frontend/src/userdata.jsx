import React from "react";
import Headera from "./headera";
import Footer from "./footer";
import { useState, useEffect } from "react";
import axios from "axios";

function Userdata() {
    const [userdata, setUserdata] = useState([])
    useEffect(() => {
        axios.get("/api/adminofbmsr/userdata")
            .then(res => setUserdata(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = async (userid) => {
        try{
            await axios.delete('/api/adminofbmsr/userdatadel/'+userid)
            window.location.reload()
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <Headera />
            <br />
            <h2 align="center">User Data</h2>

            <table class='table table-bordered table-hover'>
                <tr id="field">
                    <th>User-Id</th>
                    <th>Mobile-No</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
                <tbody>
                    {
                        userdata.length > 0 ?
                            userdata.map((data, i) => (
                                <tr>
                                    <td>{data.userid}</td>
                                    <td>{data.mobileno}</td>
                                    <td>{data.email}</td>
                                    <td>
                                    <button  onClick={e => handleDelete(data.userid)} class='btn btn-danger'>
                                            <div class='fa-solid fa-trash' style={{ color: 'black' }}></div>
                                    </button>
                                    </td>
                                </tr>
                            )) : <tr><th colSpan={10}><center>No result found</center></th></tr>
                    }
                </tbody>
            </table>
            <Footer />
        </>
    )
}
export default Userdata