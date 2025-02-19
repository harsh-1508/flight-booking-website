import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './First'
import Schedule from './Schedule'
import About from './About'
import Contact from './Contact'
import Ulogin from './ulogin'
import Register from './Register'
import User from './user'
import Allflight from './allflight'
import Myflight from './myflight'
import Passanger from './passanger'
import Eticket from './Eticket'
import Booking from './Booking'
import Uforgot from './Uforgot'
import Payment from './payment'
import Success from './success'
import Alogin from './alogin'
import QRScanner from './QRScanner'
import Gen from './gen'
import Admin from './admin'
import Approve from './approve'
import Analyses from './Analyses'
import Feedback from './feedback'
import Flight from './flight'
import Airline from './airline'
import Userdata from './userdata'
import Onairport from './onairport'
import Flightmst from './flight_mst'
import Ticket from './ticket'
import Status from './status'
import Report from './report'
import Backup from './backup'
import Chatbot from './chatbox'
import Weather from './weather'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/ulogin" element={<Ulogin />}></Route>
          <Route path="/uforgot" element={<Uforgot />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/allflight" element={<Allflight />}></Route>
          <Route path="/myflight" element={<Myflight />}></Route>
          <Route path="/passanger" element={<Passanger />}></Route>
          <Route path="/eticket" element={<Eticket />}></Route>
          <Route path="/user/booking" element={<Booking />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/alogin" element={<Alogin />}></Route>
          <Route path="/scan" element={<QRScanner />}></Route>
          <Route path="/gen" element={<Gen />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/analyses" element={<Analyses />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="analyses/approve" element={<Approve />}></Route>
          <Route path="/flight" element={<Flight />}></Route>
          <Route path="/flight_mst" element={<Flightmst />}></Route>
          <Route path="/airline" element={<Airline />}></Route>
          <Route path="/userdata" element={<Userdata />}></Route>
          <Route path="/onairport" element={<Onairport />}></Route>
          <Route path="myflight/ticket" element={<Ticket />}></Route>
          <Route path="/status" element={<Status />}></Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/backup" element={<Backup />}></Route>
          <Route path="/chatbox"element={<Chatbot/>}></Route>
          <Route path="/weather" element={<Weather/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;