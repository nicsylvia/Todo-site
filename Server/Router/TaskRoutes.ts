import { CreateTasks } from "../Controls/TaskControls";

import express from "express";

const router = express.Router();

router.route("/createTask/:userID").post(CreateTasks);

export default router