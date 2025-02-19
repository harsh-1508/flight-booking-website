import {db} from "../db.js";
import nodemailer from 'nodemailer';
import { exec } from "child_process";
import fs from "fs";

export function alogin(req, res){
    const sql = "SELECT * FROM `admin` WHERE `name`= ? AND `password`= ?";
    db.query(sql, [req.body.id,req.body.pwd], (err, data) => {
        if (err) return res.json("error");
        if(data.length > 0){
            return res.json("success");
            }
            else{
                return res.json("failed");
            }
    })
}
export function report(req, res){
    const sql = "SELECT count(fname) AS `tf`,sum(`passanger`) As `ep`,sum(price-cost) AS `epro` FROM `booking`,`flight` WHERE booking.fid=flight.fid AND booking.class='Economy'";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function report1(req, res){
    const sql = "SELECT sum(`passanger`) As `bp`,sum(price-cost) AS `bpro` FROM `booking`,`flight` WHERE booking.fid=flight.fid AND booking.class='Business'";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function report2(req, res){
    const sql = "SELECT sum(passanger) AS `tp`,sum(price-cost) AS `tpro` FROM booking";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function report3(req, res){
    const sql = "SELECT count(fid) AS `do` FROM flight Where fid like '10%'";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function report4(req, res){
    const sql = "SELECT count(fid) AS `in` FROM flight Where fid not like '10%'";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function report5(req, res){
    const sql = "SELECT count(fname)AS `to` FROM flight ";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function report6(req, res){
    const sql = "SELECT count(name) AS `air` FROM airline ";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function graph(req, res){
    db.query("SELECT *,CONCAT(userid,'/',fname) AS `a`,(price-cost) AS `bpro` FROM `booking`,`flight` WHERE booking.fid=flight.fid ", (error, results) => {
      if (error) {
        res.status(500).send('Error fetching data from database');
      } else {
        res.json(results);
      }
    });
  }
export function analyses(req, res){
    const sql = "SELECT booking.bookingid,booking.userid,booking.action,registration.email,booking.fid,booking.passanger,booking.class,flight.departure,flight.arrival,flight.eprice,flight.ecost,booking.price,booking.cost,(eprice-ecost) as eprofit FROM registration,flight,booking WHERE booking.userid=registration.userid AND booking.fid=flight.fid AND booking.class='Economy'";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function analyses1(req, res){
    const sql = "SELECT booking.bookingid,booking.userid,booking.action,registration.email,booking.fid,booking.passanger,booking.class,flight.departure,flight.arrival,flight.bprice,flight.bcost,booking.price,booking.cost,(bprice-bcost) as bprofit FROM registration,flight,booking WHERE booking.userid=registration.userid AND booking.fid=flight.fid AND booking.class='Business'";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function analyses2(req, res){
    const sql = "SELECT DATE_FORMAT(`depart`,\'%d-%m-%Y\') AS `depart`,DATE_FORMAT(`return`,\'%d-%m-%Y\') AS `return`,flight.fid,booking.userid,passenger.passangername,passenger.gender,passenger.age,passenger.price FROM flight,booking,passenger WHERE booking.userid=passenger.userid AND booking.fid=flight.fid AND booking.fid=passenger.fid ";
    db.query(sql,(err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function approve(req, res){
    const sql = "SELECT * FROM `payment` WHERE userid=? AND fid=?";
    db.query(sql, [req.body.userid,req.body.fid], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function approve1(req, res){
    const sql = "UPDATE `booking` SET `action`= ? WHERE  `bookingid`= ? ";
    const values = [
        req.body.check
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function send_email(req, res){
    const { to, subject, text } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'harshpatel150804@gmail.com',
        // pass: 'leyc bmff tgrv favl'
        pass: 'lcic yovm xnky rszu'
      }
    });
  
    const mailOptions = {
      from: 'harshpatel150804@gmail.com',
      to,
      subject,
      text
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send("Email Not Sended");
      } else {
        res.send('Email sent successfully');
      }
    });
}
export function flightins(req, res){
    const sql = "INSERT INTO flight(`fid`,`airlineid`,`fname`,`depart`,`return`,`departure`,`arrival`,`eprice`,`ecost`,`bprice`,`bcost`,`seat`) VALUES (?)";
    const values = [
        req.body.fid,
        req.body.airid,
        req.body.fname,
        req.body.depart,
        req.body.returna,
        req.body.departure,
        req.body.arrival,
        req.body.eprice,
        req.body.ecost,
        req.body.bprice,
        req.body.bcost,
        req.body.seat
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Enter Uniqe fid");
        }
        else{
            return res.json("One Flight Added");
        }
    })
}
export function sel(req, res){
    const sql = "SELECT * FROM `flight_mst`";
    db.query(sql,(err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function airline(req, res){
    const sql = "SELECT * FROM `airline`";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function filter(req, res){
    const sql = "DELETE FROM flight WHERE DATE(depart)<DATE(NOW())";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function flightdel(req, res){
    const sql = "DELETE FROM `flight` WHERE fid = ?";
    const fid = req.params.fid;
    db.query(sql, [fid], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function flightup(req, res){
    const sql = "UPDATE `flight` SET `depart`=?,`return`=? WHERE `fid`=?";
    const values = [
        req.body.udepart,
        req.body.ureturn
    ]
    const ufid = req.params.ufid;

    db.query(sql, [...values, ufid], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function airlineins(req, res){
    const sql = "INSERT INTO airline(`id`,`name`,`seat`) VALUES (?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.seat
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Enter Uniqe Air-Line Id");
        }
        else{
            return res.json("One Air-Line Added");
        }
    })
}
export function airlinedel(req, res){
    const sql = "DELETE FROM `airline` WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function userdata(req, res){
    const sql = "SELECT * FROM `registration`";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function userdatadel(req, res){
    const sql = "DELETE FROM `registration` WHERE userid = ?";
    const userid = req.params.userid;
    db.query(sql, [userid], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function flightmstins(req, res){
    const sql = "INSERT INTO flight_mst(`planeid`,`flightname`,`airlineid`,`seat`) VALUES (?)";
    const values = [
        req.body.planeid,
        req.body.flightname,
        req.body.airid,
        req.body.seat
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Enter Vaild Flight Id");
        }
        else{
            return res.json("One Plane Added");
        }
    })
}
export function flightmstdel(req, res){
    const sql = "DELETE FROM `flight_mst` WHERE planeid = ?";
    const planeid = req.params.planeid;
    db.query(sql, [planeid], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function status(req, res){
    const sql = "UPDATE `flight` SET `status`=? WHERE `fid`=?";
    const values = [
        req.body.statuss
    ]
    const fid = req.params.fid;

    db.query(sql, [...values, fid], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function awf(req, res){
    const sql ="SELECT *,DATE_FORMAT(`depart`,\'%d-%m-%Y\') AS `depart`,DATE_FORMAT(`return`,\'%d-%m-%Y\') AS `return` FROM `flight`,`airline` WHERE `airline`.`id`=`flight`.`airlineid` AND `flight`.`airlineid`=?"; 
    db.query(sql, [req.body.airid], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function dwf(req, res){
    const sql ="SELECT *,DATE_FORMAT(`depart`,\'%d-%m-%Y\') AS `depart`,DATE_FORMAT(`return`,\'%d-%m-%Y\') AS `return` FROM `flight` WHERE `departure`=? AND `arrival`=?"; 
    db.query(sql, [req.body.departure,req.body.arrival], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function dawf(req, res){
    const sql ="SELECT *, DATE_FORMAT(`depart`, '%d-%m-%Y') AS `depart`, DATE_FORMAT(`return`, '%d-%m-%Y') AS `return` FROM `flight` WHERE `depart` BETWEEN ? AND ?"; 
    db.query(sql, [req.body.from,req.body.to], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function dawb(req, res){
    const sql="SELECT *,DATE_FORMAT(`depart`, '%d-%m-%Y') AS `depart`, DATE_FORMAT(`return`, '%d-%m-%Y') AS `return`,booking.price-booking.cost AS profit from booking,flight,registration Where flight.fid=booking.fid AND booking.userid=registration.userid AND flight.depart BETWEEN ? AND ?";
    db.query(sql, [req.body.from1,req.body.to1], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function backup(req, res){
    const mysqldumpPath = 'C:\\wamp64\\bin\\mysql\\mysql8.0.31\\bin\\mysqldump';  
    const command = `"${mysqldumpPath}" -u root -pharsh@123 flightproject > flightproject.sql`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).json({ message: 'Database backup failed' });
        }
        const backupPath = 'flightproject.sql';
        fs.readFile(backupPath, (err, data) => {
            if (err) {
                console.error(`Error reading backup file: ${err.message}`);
                return res.status(500).json({ message: 'Database backup failed' });
            }
            res.set('Content-Type', 'application/octet-stream');
            res.attachment('backup.sql');
            res.send(data);
        });
    });
}