import React, { useEffect, useRef, useState } from 'react';
import Headera from './headera';
import Footer from './footer';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authToken");
    if (!isAuthenticated) {
      navigate('/alogin');
    }
  }, [navigate]);


  const [report, setReport] = useState([])
  useEffect(() => {
    axios.get('/api/adminofbmsr/report')
      .then(res => setReport(res.data))
      .catch(err => console.log(err));
  }, [])
  const [report1, setReport1] = useState([])
  useEffect(() => {
    axios.get('/api/adminofbmsr/report1')
      .then(res => setReport1(res.data))
      .catch(err => console.log(err));
  }, [])
  const [report2, setReport2] = useState([])
  useEffect(() => {
    axios.get('/api/adminofbmsr/report2')
      .then(res => setReport2(res.data))
      .catch(err => console.log(err));
  }, [])
  const [report3, setReport3] = useState([])
  useEffect(() => {
    axios.get('/api/adminofbmsr/report3')
      .then(res => setReport3(res.data))
      .catch(err => console.log(err));
  }, [])
  const [report4, setReport4] = useState([])
  useEffect(() => {
    axios.get('/api/adminofbmsr/report4')
      .then(res => setReport4(res.data))
      .catch(err => console.log(err));
  }, [])
  const [report5, setReport5] = useState([])
  useEffect(() => {
    axios.get('/api/adminofbmsr/report5')
      .then(res => setReport5(res.data))
      .catch(err => console.log(err));
  }, [])
  const [report6, setReport6] = useState([])
  useEffect(() => {
    axios.get('/api/adminofbmsr/report6')
      .then(res => setReport6(res.data))
      .catch(err => console.log(err));
  }, [])

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/adminofbmsr/graph');
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(item => item.a),
        datasets: [{
          label: 'Profit',
          data: data.map(item => item.bpro),
          backgroundColor: 'rgba(11, 156, 49, 0.4)',
          borderColor: 'rgba(11, 156, 49, 1)',
          borderWidth: 1
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]); 

  return (
    <div>
      <Headera />
      <div className="container">
        <div className="section">
          <div className="dashbord card">
            <div className="icon">
              <i><div className="fa-solid fa-user" style={{ color: "black" }}></div></i><br /><br />
              Total Passenger
              <p>{report2.map((data, i) => (<p>{data.tp}</p>))}{report.map((data, i) => (<p>Economy:-{data.ep}</p>))}{report1.map((data, i) => (<p>Business:-{data.bp}</p>))}</p>
            </div>
          </div>
          <div className="dashbord dashbord-green card">
            <div className="icon">
              <i><div className="fa-solid fa-indian-rupee-sign" style={{ color: "black" }}></div></i><br /><br />
              Amount Of Profit
              <p>{report2.map((data, i) => (<p>{data.tpro}</p>))}{report.map((data, i) => (<p>Economy:-{data.epro}</p>))}{report1.map((data, i) => (<p>Business:-{data.bpro}</p>))}</p>
            </div>
          </div>
          <div className="dashbord dashbord-red card">
            <div className="icon">
              <i><div className="fa-solid fa-plane" style={{ color: "black" }}></div></i><br /><br />
              Total Flights
              <p>{report5.map((data, i) => (<p>{data.to}</p>))}{report3.map((data, i) => (<p>Domestic Flight:-{data.do}</p>))}{report4.map((data, i) => (<p>InternationalFlight:-{data.in}</p>))}</p>
            </div>
          </div>
          <div className="dashbord dashbord-blue card">
            <div className="icon">
              <i><div className="fa-solid fa-plane fa-rotate-180" style={{ color: "black" }}></div></i><br /><br />
              Available Airlines
              <p>{report6.map((data, i) => (<p>{data.air}</p>))}<p><Link style={{ color: "black" }} to='/flight'>ADD FLIGHT</Link></p><p><Link style={{ color: "black" }} to='/airline'>ADD AIR LINE</Link></p></p>
            </div>
          </div>
        </div>
      </div><br />
      <div className='container' style={{ width: '900px', height: '500px' ,border: '1px solid black'}}>
      <canvas ref={chartRef}></canvas>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
