import express from "express";
const router = express.Router();
//import auth from "../middleware/auth.js";

import {home , CreateUser,logIn, getAllUser, AddPending, AddInvitation, GetInvitations} from "../controllers/auth-controller.js";
//const register = require("../controllers/auth-controller.js");
router.get("/GetInvitations/:id",GetInvitations);
router.post("/Inviation/:id",AddInvitation);
router.post("/Pending/:id",AddPending);
router.get("/getAllUser",getAllUser);
router.post("/NewUser",CreateUser);
router.route("/logIn").post(logIn);
router.get("/",home);
//router.route("/").get(auth,home);




export default router;