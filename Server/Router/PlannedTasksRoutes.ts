import { createPlannedTasks, getOnePlannedTasks, getPlannedTasks } from "../Controls/plannedTasksController";

import { Router } from "express";

const plannedTaskRouter = Router();

plannedTaskRouter.route("/createplannedtasks/:userID").post(createPlannedTasks);
plannedTaskRouter.route("/getplannedtasks/:userID").get(getPlannedTasks);
plannedTaskRouter.route("/getoneplannedtask/:taskID").get(getOnePlannedTasks);

export default plannedTaskRouter;
