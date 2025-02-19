import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <br/><br/>
                <center><div className="col-md-12" id="footer">
                    <footer>
                        <div className="col-md-2">
                            <h5>Services</h5>
                            <ul className="list-unstyled text-small">
                                <li><anchor className="text-muted" href="#">Food</anchor></li>
                                <li><anchor className="text-muted" href="#">Entertainment</anchor></li>
                                <li><anchor className="text-muted" href="#">EnjoyMent</anchor></li>
                                <li><anchor className="text-muted" href="#">Good Staff</anchor></li>
                                <li><anchor className="text-muted" href="#">Room Provide</anchor></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>In Website</h5>
                            <ul className="list-unstyled text-small">
                                <Link to="/"style={{color:"Gray"}}>Home</Link><br/>
                                <Link to="/ulogin"style={{color:"Gray"}}>Booking</Link><br/>
                                <Link to="/schedule"style={{color:"Gray"}}>Schedual</Link><br/>
                                <Link to="/about"style={{color:"Gray"}}>About-us</Link><br/>
                                <Link to="/contact"style={{color:"Gray"}}>Contact-us</Link><br/>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5>GoFor</h5>
                            <ul className="list-unstyled text-small">
                                <li><anchor className="text-muted" href="#">Business</anchor></li>
                                <li><anchor className="text-muted" href="#">Education</anchor></li>
                                <li><anchor className="text-muted" href="#">Government</anchor></li>
                                <li><anchor className="text-muted" href="#">Visiter</anchor></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><anchor className="text-muted" href="#">Team</anchor></li>
                                <li><anchor className="text-muted" href="#">Locations</anchor></li>
                                <li><anchor className="text-muted" href="#">Privacy</anchor></li>
                                <li><anchor className="text-muted" href="#">Terms</anchor></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Contects</h5>
                            <ul className="list-unstyled text-small">
                                <li><i className="fa-brands fa-instagram"></i> <a href="https://www.instagram.com/harsh_patel_1504/" className="text-muted">harsh_patel_1504</a></li>
                                <li><i className="fa-brands fa-facebook"></i> <a href="https://www.facebook.com" className="text-muted">harsh patel</a></li>
                                <li><i className="fa-brands fa-twitter"></i> <a href="https://twitter.com/"className="text-muted">harsh patel 1504</a></li>
                                <li><i className="fa-solid fa-envelope"></i> <a href="https://mail.google.com/mail/u/0/#inbox"className="text-muted">harshpatel150804@gmail.com</a></li>
                                <li><i className="fa-solid fa-phone"></i> <anchor className="text-muted">9727346516</anchor></li>
                            </ul>
                        </div>
                    </footer>
                </div></center>
        </>
    )
}
export default Footer; 