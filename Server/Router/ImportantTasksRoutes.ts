import { createImportantTasks, getImportantTasks, getOneImportantTasks } from "../Controls/ImportantTasksController";

import express from "express";

const router = express.Router();

router.route("/createimportanttasks/:userID").post(createImportantTasks)
router.route("/getimportanttasks/:userID").get(getImportantTasks)
router.route("/getimportanttask/:taskID").get(getOneImportantTasks)


export default router;