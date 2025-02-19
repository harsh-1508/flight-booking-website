import {db} from "../db.js";

export function first(req,res){
    const sql = "SELECT *,DATE_FORMAT(`depart`,\'%d-%m-%Y\') AS `depart`,DATE_FORMAT(`return`,\'%d-%m-%Y\') AS `return` FROM `flight` WHERE `departure`= ? AND `arrival`= ? AND `depart`= ? AND `return`= ? And `seat`>=?";
    db.query(sql,[req.body.departure,req.body.arrival,req.body.depart,req.body.returnd,req.body.count],(err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function register(req, res){
    const sql = "INSERT INTO `registration`(`userid`, `password`, `mobileno`, `email`) VALUES(?)";
    const values = [
        req.body.id,
        req.body.pwd,
        req.body.mono,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Enter Uniqe User Id");
        }
        else{
            return res.json("Registered");
        }
    })
}
export function ulogin(req, res){
    const sql = "SELECT * FROM `registration` WHERE `userid`= ? AND `password`= ?";
    db.query(sql, [req.body.uid,req.body.pwd], (err, data) => {
        if (err) return res.json("error");
        if(data.length > 0){
            return res.json("success");
            }
            else{
                return res.json("failed");
            }
    })
}
export function schedule(req, res){
    const sql = 'SELECT *,DATE_FORMAT(`depart`,\'%d-%m-%Y\') AS `depart`,DATE_FORMAT(`return`,\'%d-%m-%Y\') AS `return` FROM `flight` WHERE DATE(`depart`)=DATE(NOW()) ORDER BY `fid`';
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function allflight(req, res){
    const sql = "SELECT *,DATE_FORMAT(`depart`,\'%d-%m-%Y\') AS `depart`,DATE_FORMAT(`return`,\'%d-%m-%Y\') AS `return` FROM `flight`";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function myflight(req, res){
    const sql = "SELECT booking.userid,registration.email,booking.fid,flight.status,flight.departure,flight.arrival,booking.passanger,booking.class,booking.price,booking.action,DATE_FORMAT(`depart`,\'%d-%m-%Y\') AS `depart`,DATE_FORMAT(`return`,\'%d-%m-%Y\') AS `return` FROM registration,flight,booking WHERE booking.userid=registration.userid AND booking.fid=flight.fid AND booking.userid=?";
    db.query(sql, [req.body.uid], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function passanger(req, res){
    const sql = "SELECT DATE_FORMAT(`depart`,\'%d-%m-%Y\') AS `depart`,DATE_FORMAT(`return`,\'%d-%m-%Y\') AS `return`,flight.fid,booking.userid,passenger.passangername,passenger.gender,passenger.age,passenger.price FROM flight,booking,passenger WHERE booking.userid=passenger.userid AND passenger.userid=? AND booking.fid=flight.fid AND booking.fid=passenger.fid";
    db.query(sql, [req.body.uid], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function eticket(req, res){
    const sql = "SELECT *,DATE_FORMAT(`depart`,\'%d-%m-%Y\') AS `depart`,DATE_FORMAT(`return`,\'%d-%m-%Y\') AS `return` FROM passenger,registration,flight,booking,airline WHERE passenger.userid=? AND booking.userid=registration.userid AND booking.fid=flight.fid AND booking.userid=passenger.userid AND booking.fid=passenger.fid AND booking.action='Approve' AND airline.id=flight.airlineid ";
    db.query(sql, [req.body.uid], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function eticket1(req, res){
    const sql = "SELECT *,DATE_FORMAT(`depart`,\'%d-%m-%Y\') AS `depart`,DATE_FORMAT(`return`,\'%d-%m-%Y\') AS `return` FROM passenger,registration,flight,booking,seats,airline WHERE passenger.userid=? AND booking.userid=registration.userid AND booking.fid=flight.fid AND booking.userid=passenger.userid AND booking.fid=passenger.fid AND seats.userid=registration.userid AND flight.fid=seats.fid AND seats.occupied=1 AND  booking.action='Approve' AND airline.id=flight.airlineid ";
    db.query(sql, [req.body.uid], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}
export function enpan(req, res){
    const sql = "INSERT INTO `passenger`(`userid`, `fid`, `passangername`, `gender`, `age`, `price`) VALUES(?)";
    const values = [
        req.body.userid,
        req.body.fid,
        req.body.pn,
        req.body.gen,
        req.body.age,
        req.body.price
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function booking(req, res){
    const sql = "INSERT INTO `booking`(`userid`,`fid`,`passanger`,`class`,`price`,`cost`) VALUES(?)";
    const values = [
        req.body.userid,
        req.body.fid,
        req.body.psg,
        req.body.clas,
        req.body.tprice,
        req.body.tcost
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function seats(req, res){
    db.query('SELECT seat_number FROM seats WHERE occupied = 1 AND fid=?', [req.body.fid], (error, results) => {
        if (error) {
            console.error('Error fetching occupied seats:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        const occupiedSeats = results.map(row => row.seat_number);
        res.json(occupiedSeats);
    });
}
export function selectseat(req, res){
    const { seats } = req.body;
    const sql = 'UPDATE seats SET occupied = 1,userid=? WHERE seat_number IN (?) AND fid=?';
    db.query(sql, [req.body.userid,seats,req.body.fid], (error, results) => {
        if (error) {
            console.error('Error updating seat occupancy:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json({ message: 'Seats occupancy updated successfully' });
    });
};
export function upbookseat(req, res) {
    const sql = "UPDATE `flight` SET `seat`=? WHERE `fid`=?";
    const values = [req.body.useat];
    const fid = req.params.fid;

    db.query(sql, [...values, fid], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
}
export function payment(req, res){
    const sql = "INSERT INTO payment(`userid`,`cardno`,`cardholdername`,`cvv`,`expdate`,`amount`,`fid`) VALUES (?)";
    const values = [
        req.body.uid,
        req.body.cn,
        req.body.chn,
        req.body.cvv,
        req.body.exp,
        req.body.amt,
        req.body.fid
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Enter Right Information");
        }
        else{
            return res.json("success");
        }
    })
}
export function uforgot(req, res){
    const sql = "UPDATE `registration` SET `password`= ? WHERE `mobileno` = ?";
    const values = [
        req.body.pwd
    ]
    const ph = req.params.ph;

    db.query(sql, [...values, ph], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
}
export function uforgotse(req, res){
    const sql = "SELECT * FROM `registration` WHERE `mobileno`= ?";
    db.query(sql, [req.body.ph], (err, data) => {
        if (err) return res.json("error");
        if(data.length > 0){
            return res.json("success");
            }
            else{
                return res.json("failed");
            }
    })
}
export function ticket(req, res){
    const sql = "SELECT *,passenger.price AS p FROM passenger,registration,flight,booking,airline WHERE passenger.userid=? AND booking.userid=registration.userid AND booking.fid=flight.fid AND booking.userid=passenger.userid AND booking.fid=passenger.fid AND booking.action='Approve' AND airline.id=flight.airlineid AND flight.fid=?";
    db.query(sql, [req.body.uid,req.body.fid], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
}