import { CreateTasks, getTask } from "../Controls/TaskControls";

import express from "express";

const router = express.Router();

router.route("/createTask/:userID").post(CreateTasks);
router.route("/getTask").get(getTask);

export default router