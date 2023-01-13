import mongoose from "mongoose";

import { taskData2 } from "./AllInterface";

interface plannedTasks extends taskData2, mongoose.Document{};

const plannedSchema = new mongoose.Schema({
    tittle: {
        type: String,
    },
    date: {
        type: String,
    },
    reminder: {
        type: String,
    },
    note: {
        type: String,
    },
    status: {
        type: Boolean,
    }
});

const plannedModels = mongoose.model<plannedTasks>("importantTasks", plannedSchema);

export default plannedModels;