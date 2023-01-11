import mongoose from "mongoose";

import { taskData2 } from "../Models/AllInterface";

interface NewTask extends taskData2, mongoose.Document{};

const TaskSchema = new mongoose.Schema({
    tittle: {
        type: String,
    },
    date: {
        type: String,
    },
    remainder: {
        type: String,
    },
    note: {
        type: String,
    },
    status: {
        type: Boolean,
    },
    day: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todoUsers",
    }
});

const TaskModel =  mongoose.model<NewTask>("tasks", TaskSchema)

export default TaskModel
