import { createImportantTasks, getImportantTasks, getOneImportantTasks } from "../Controls/ImportantTasksController";

import express from "express";

const importantTaskRoutes = express.Router();

importantTaskRoutes.route("/createimportanttasks/:userID").post(createImportantTasks)
importantTaskRoutes.route("/getimportanttasks/:userID").get(getImportantTasks)
importantTaskRoutes.route("/getimportanttask/:taskID").get(getOneImportantTasks)


export default importantTaskRoutes;