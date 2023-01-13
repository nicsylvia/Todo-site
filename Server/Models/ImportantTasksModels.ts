import mongoose from "mongoose";

import { taskData2 } from "./AllInterface";

interface importantTasks extends taskData2, mongoose.Document{};

const importantSchema = new mongoose.Schema({
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

const importantModels = mongoose.model<importantTasks>("importantTasks", importantSchema);

export default importantModels;