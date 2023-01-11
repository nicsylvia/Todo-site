import mongoose from "mongoose";

const liveURL: string = "mongodb://localhost/microsoftTODO";

mongoose.connect(liveURL).then(()=>{
    console.log("connected");
})

// mongoose.connection.on(
//     "open", () =>{
//         console.log("DB CONNECTED TO SERVER");
//     }
// ).once(
//     "error", (error) =>{
//         console.log("An error occured in connecting DB");
//     }
// )