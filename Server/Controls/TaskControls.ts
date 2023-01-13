import {Response, Request} from "express";
import mongoose from "mongoose";
import userModel from "../Models/UserModels";
import TaskModel from "../Models/TaskModels";

const getTask = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const allTask = await TaskModel.find();
        return res.status(200).json({
            message: "Successfully got all the tasks",
            data: allTask
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting all tasks",
            data: error
        })
    }
}

const CreateTasks = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const getUser = await userModel.findById(req.params.userID);
        if (getUser) {
            const { tittle, date } = req.body;
            let myDate = new Date();
            const creatingTask = await TaskModel.create({
                tittle,
                date: date ? date : myDate,
                reminder: "",
                status: false,
                note: "",
            });
            await getUser?.myDay?.push(
                new mongoose.Types.ObjectId(creatingTask!._id),
            )
            await getUser?.task?.push(new mongoose.Types.ObjectId(creatingTask!._id));

            getUser.save();

            return res.status(200).json({
                message: "Successfully created tasks for this user",
                data: creatingTask
            });
        
        }
        else{
            return res.status(404).json({
                message: "User not found",
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: "An error occured while creating task",
            data: error
        })
    }
}

export { CreateTasks, getTask};