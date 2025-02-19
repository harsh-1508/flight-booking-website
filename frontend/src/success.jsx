import React from "react";
import { Link } from "react-router-dom"
function Success(){
    return(
        <>
        <div id="success"></div>
        <center><Link to="/myflight"><button class="btn btn-success">Done/Home</button></Link></center>
        </>
    )
}
export default Success;