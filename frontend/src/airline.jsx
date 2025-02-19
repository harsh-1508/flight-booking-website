import React from "react";
import Headera from "./headera";
import Footer from "./footer";
import { useState, useEffect } from "react";
import axios from "axios";

const handleDelete = async (id) => {
    try{
        await axios.delete('/api/adminofbmsr/airlinedel/'+id)
        window.location.reload()
    }
    catch(err){
        console.log(err);
    }
}

function Airline() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [seat, setSeat] = useState('');
    function handel(event){
        event.preventDefault();
        axios.post('/api/adminofbmsr/airlineins', {id,name,seat})
        .then(res => {
            alert(res.data);
            window.location.reload()
        }).catch(err => alert(err)); 
    }
    const [airline, setAirline] = useState([])
    useEffect(() => {
        axios.get("/api/adminofbmsr/airline")
            .then(res => setAirline(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <Headera />
            <br />
            <form align="center" method="POST" onSubmit={handel}>
                <h2>Add New Air-Line</h2>
                <div class="form-inline">
                    <label class="control-label"><u>ID:-</u></label>
                    <input required onChange={e => setId(e.target.value)} class="form-control" id="id" name="id" type="text" placeholder="Air Line Id" />
                    <label class="control-label"><u>Name:-</u></label>
                    <input required onChange={e => setName(e.target.value)} class="form-control" id="name" name="name" type="text" placeholder="Air Line Name" />
                    <label class="control-label"><u>seat:-</u></label>
                    <input required onChange={e => setSeat(e.target.value)} class="form-control" id="seat" name="seat" type="text" placeholder="Air Line Name" />
                </div><br />
                <button class="btn btn-success" id="add" name="add">ADD</button><br /><br />
                <h2>Air-Line Details</h2>
            </form>
            <table class='table table-bordered table-hover'>
                <tr id="field">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Seat</th>
                    <th>Delete</th>
                </tr>
                <tbody>
                    {
                        airline.length > 0 ?
                            airline.map((data, i) => (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.seat}</td>
                                    <td>
                                    <button  onClick={e => handleDelete(data.id)} class='btn btn-danger'>
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
export default Airline