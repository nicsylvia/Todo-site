import userModels from "../Models/UserModels";

import taskModels from "../Models/TaskModels";

import plannedModels from "../Models/PlannedTasksModels";

import {Request, Response} from "express";
import mongoose from "mongoose";

// Create planned tasks:
const createPlannedTasks = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const userPlannedTasks = await userModels.findById(req.params.userID);
        if (userPlannedTasks) {
            const {tittle, date} = req.body;
            const plannedDate = new Date();
            const plannedTasks = await taskModels.create({
                tittle,
                date: date ? date : plannedDate,
                note: "",
                reminder: "",
                status: false
            });
            await userPlannedTasks?.myDay?.push(
                new mongoose.Types.ObjectId(plannedTasks._id)
            )
            await userPlannedTasks?.task?.push(
                new mongoose.Types.ObjectId(plannedTasks._id)
            )
            await userPlannedTasks?.planned?.push(
                new mongoose.Types.ObjectId(plannedTasks._id)
            )
            userPlannedTasks.save();
            return res.status(201).json({
                message: "Successfully created this users planned tasks",
                data: plannedTasks
            })
        } else {
            return res.status(400).json({
                message: "User not found",
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in creating your planned tasks",
            data: error
        })
    }
}

// get All Planned tasks:
const getPlannedTasks = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const AllplannedTasks = await userModels.findById(req.params.userID);
        return res.status(200).json({
            message: "Successfully got all the planned tasks",
            data: AllplannedTasks
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured while getting important tasks",
            data: error
        })
    }
}

// Get single planned tasks:
const getOnePlannedTasks = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const singlePlannedTasks = await plannedModels.findById(req.params.taskID);
        return res.status(200).json({
            message: "Successfully got this user's planned tasks",
            data: singlePlannedTasks
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured while getting this planned tasks",
            data: error
        })
    }
}

export {createPlannedTasks, getPlannedTasks, getOnePlannedTasks}