import mongoose from "mongoose";

const URI = "mongodb://127.0.0.1/microsoftTODO";
const liveURI = "";

mongoose.connect(URI)

mongoose.connection.on(
    "open", () =>{
        console.log("DB CONNECTED TO SERVER");
    }
).once(
    "error", (error) =>{
        console.log("An error occured in connecting DB");
    }
)