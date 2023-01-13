import userModel from "../Models/UserModels";
import taskModels from "../Models/TaskModels"
import importantModels from "../Models/ImportantTasksModels";

import {Response, Request} from "express";
import mongoose from "mongoose";

// create important tasks:
const createImportantTasks = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const userImportantTasks = await userModel.findById(req.params.userID);
        if (userImportantTasks) {
            const {tittle, date} = req.body;
            const automaticDate = new Date();
            const createTasks = await taskModels.create({
                tittle,
                date: date ? date : automaticDate,
                reminder: "",
                note: "",
                status: false
            });
            await userImportantTasks?.task?.push(
                new mongoose.Types.ObjectId(createTasks!._id)
            )
            await userImportantTasks?.important?.push(
                new mongoose.Types.ObjectId(createTasks!._id)
            )
            userImportantTasks.save()
            return res.status(201).json({
                message: "Successfully created important tasks",
                data: createTasks
            })
        } else {
            return res.status(400).json({
                message: "User not found, tasks couldn't be created"
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in creating this tasks",
            data: error
        })
    }    
}

// get important tasks:
const getImportantTasks = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const importantTasks = await userModel.findById(req.params.userID).populate(
            {
                path: "important",
            }
        )
        return res.status(200).json({
            message: "Successfully got all the important tasks",
            data: importantTasks
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured while getting important tasks",
            data: error
        })
    }
}

// get single important tasks:
const getOneImportantTasks = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const singleImportantTasks = await importantModels.findById(req.params.taskID);
        return res.status(200).json({
            message: "Successfully got this user's important tasks",
            data: singleImportantTasks
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured while getting this important tasks",
            data: error
        })
    }
}

export {getOneImportantTasks, getImportantTasks, createImportantTasks}