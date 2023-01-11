import { getAllUsers, getSingleUser, RegisterUsers } from "../Controls/UserController";

import express from "express";

const router = express.Router();

router.route("/getusers").get(getAllUsers);
router.route("/getuser/:id").get(getSingleUser);
router.route("/registerusers").post(RegisterUsers);

export default router;

