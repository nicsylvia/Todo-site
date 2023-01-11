import express, { Application, Request, Response } from "express";

import cors from "cors";
import userRouter from "../Router/userRoutes";
import taskRoutes from "../Router/TaskRoutes"

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

app.listen(port, () =>{
    console.log("Listening to server port on port", port);
})