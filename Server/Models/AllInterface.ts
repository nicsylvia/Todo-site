import mongoose from "mongoose";

export type taskData = {
    tittle? : string;
    date? : string;
    reminder? : string;
    note? : string;
    status? : boolean;
}
export interface taskData2 {
    tittle? : string;
    date? : string;
    reminder? : string;
    note? : string;
    status? : boolean;
}