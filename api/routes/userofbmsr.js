import express from "express";
import { first, register, ulogin, schedule, allflight, myflight, passanger
    , eticket, eticket1, enpan, booking, seats, selectseat, upbookseat
    , payment, uforgot, 
    uforgotse,
    ticket} from '../controllers/userofbmsc.js';
const router = express.Router()

router.post("/",first)
router.post("/register",register)
router.post("/ulogin",ulogin)
router.get("/schedule",schedule)
router.get("/allflight",allflight)
router.post("/myflight",myflight)
router.post("/passanger",passanger)
router.post("/eticket",eticket)
router.post("/eticket1",eticket1)
router.post("/enpan",enpan)
router.post("/booking",booking)
router.post("/seats",seats)
router.post("/selectseat",selectseat)
router.put("/upbookseat/:fid",upbookseat)
router.post("/payment",payment)
router.put("/uforgot/:ph",uforgot)
router.post("/uforgotse",uforgotse)
router.post("/ticket",ticket)

export default router
