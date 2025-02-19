import express from "express";
import { airline, airlinedel, airlineins, alogin, analyses, analyses1, analyses2, approve, approve1,
      awf, backup, dawb, dawf, dwf, filter, flightdel, flightins, flightmstdel, flightmstins, flightup, graph,
      report, report1, report2, report3, report4, report5, report6, sel, send_email, status, userdata,
      userdatadel} from "../controllers/adminofbmsc.js";
const router = express.Router()

router.post("/alogin",alogin)
router.get("/report",report)
router.get("/report1",report1)
router.get("/report2",report2)
router.get("/report3",report3)
router.get("/report4",report4)
router.get("/report5",report5)
router.get("/report6",report6)
router.get("/graph",graph)
router.get("/analyses",analyses)
router.get("/analyses1",analyses1)
router.get("/analyses2",analyses2)
router.post("/approve",approve)
router.put("/approve1/:id",approve1)
router.post("/send_email",send_email)
router.post("/flightins",flightins)
router.get("/sel",sel)
router.get("/airline",airline)
router.delete("/filter",filter)
router.delete("/flightdel/:fid",flightdel)
router.put("/flightup/:ufid",flightup)
router.post("/airlineins",airlineins)
router.delete("/airlinedel/:id",airlinedel)
router.get("/userdata",userdata)
router.delete("/userdatadel/:userid",userdatadel)
router.post("/flightmstins",flightmstins)
router.delete("/flightmstdel/:planeid",flightmstdel)
router.put("/status/:fid",status)
router.post("/awf",awf)
router.post("/dwf",dwf)
router.post("/dawf",dawf)
router.post("/dawb",dawb)
router.get("/backup",backup)

export default router