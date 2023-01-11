import mongoose from "mongoose";

import { taskData } from "./AllInterface";

interface userData{
    name: string;
    email: string;
    password: string;
    myDay: any[];
    important: taskData[];
    planned: taskData[];
    assigned: taskData[];
    task: any[];
}

interface iUserData extends userData, mongoose.Document{}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    myDay: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tasks"
        }
    ],
    important: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tasks"
        }
    ],
    planned: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tasks"
        }
    ],
    assigned: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tasks"
        }
    ],
    task: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tasks"
        }
    ]
});

const userModel = mongoose.model<iUserData>("todoUsers", userSchema)
export default userModel;