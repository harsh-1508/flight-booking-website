import React from "react";
import axios from "axios";
import Headera from "./headera";
import Footer from "./footer";

function Backup() {
  const handleDownload = async () => {
    try {
      const response = await axios.get("/api/adminofbmsr/backup", {
        responseType: "blob" 
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "backup.sql"); 
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again later.");
    }
  };

  return (
    <div>
      <Headera />
      <br/><br/><br/>
      <center>
        <button className="btn btn-success topnav" onClick={handleDownload}>
          Download Backup SQL File
        </button>
      </center>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}

export default Backup;
