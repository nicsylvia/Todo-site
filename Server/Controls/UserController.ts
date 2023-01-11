import userModel from "../Models/UserModels";
import {Request, Response} from "express";

// get all users:
const getAllUsers = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const getUser = await userModel.find();
        return res.status(200).json({
            message: "Successfully got all users", 
            data: getUser
        })
    } catch (error) {
        return res.status(400).json({
            message: "Couln't get all users",
            data: error
        })
    }
};

// post users:
const RegisterUsers = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const {name, email, password} = req.body;
        const user = await userModel.findOne({email: email})
        if (user) {
            return res.status(400).json({
                message: "User with this email already exists",
            })
        } else {
            const regUser = await userModel.create({
                name,
                email,
                password,
            })
            return res.status(201).json({
                message: "User created successfully",
                data: regUser
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "Couldn't register users",
            data: error
        })
    }
};
// getsingleuser:
const getSingleUser = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const singleUser = await userModel.findById(req.params.id);
        return res.status(200).json({
            message: "Successfully got this user details",
            data: singleUser
        })
    } catch (error) {
        return res.status(400).json({
            message: "Couldn't get this user",
            data: error
        })
    }
}

export {getAllUsers, RegisterUsers, getSingleUser} 