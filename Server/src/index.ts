import express, { Application, Request, Response } from "express";

import cors from "cors";
import userRouter from "../Router/userRoutes";
import taskRoutes from "../Router/TaskRoutes";
import importantTaskRoutes from "../Router/ImportantTasksRoutes";
import plannedTaskRouter from "../Router/PlannedTasksRoutes";

const port: number = 2023;

const app: Application = express();

require("../Config/db")

app.use(express.json());
app.use(cors())

app.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        message: "Successfully created server"
    })
});

app.use("/api/users", userRouter)
app.use("/api/tasks", taskRoutes)
app.use("/api/plannedtasks", plannedTaskRouter)
app.use("/api/importanttasks", importantTaskRoutes);


app.listen(port, () =>{
    console.log("Listening to server port on port", port);
})