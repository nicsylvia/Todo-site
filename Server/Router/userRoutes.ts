import { DeleteUsers, getAllUsers, getSingleUser, loginUsers, RegisterUsers } from "../Controls/UserController";

import express from "express";

const router = express.Router();

router.route("/getusers").get(getAllUsers);
router.route("/getuser/:id").get(getSingleUser);
router.route("/registerusers").post(RegisterUsers);
router.route("/userlogin").post(loginUsers);
router.route("/deleteallusers").delete(DeleteUsers)

export default router;

