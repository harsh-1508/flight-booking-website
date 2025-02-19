import React from "react"
import cu from "./pics/cu.png"
import Header from "./header";
import Footer from "./footer";
function Contact() {
    return (<>
        <Header />
        <br/>
        <center>
            <img alt="notfound" src={cu} style={{ height: 350,width:1470}} />
            <p>
                For any Query and Suggetion:)<br />
                Welcome Contact center <br />
                Name:-<i class="fa-solid fa-user" style={{ color: "black" }}></i> Patel Harsh<br />
                No:-<i class="fa-solid fa-phone" style={{ color: "black" }}></i> +91 9727346516<br />
                Email-Id:-<i class="fa-solid fa-envelope" style={{ color: "black" }}></i> <a href="https://mail.google.com/mail/u/0/#inbox">harshpatel150804@gmail.com</a><br />
                Insta-Id:-<i class="fa-brands fa-instagram"></i> <a href="https://www.instagram.com/">harsh_patel_1504</a><br />
                Facebook:-<i class="fa-brands fa-facebook"></i> <a href="https://www.facebook.com/">harsh patel</a><br />
                Twiter:-<i class="fa-brands fa-twitter"></i> <a href="https://www.twitter.com/">harsh patel 1504</a><br />
            </p>
            <br /><br /><br />
        </center>
        <Footer />
    </>
    )
}
export default Contact;