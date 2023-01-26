import userModel from "../Models/UserModels";
import {Request, Response} from "express";
import bcrypt from "bcrypt";

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
        const saltedPassword = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltedPassword)
        const user = await userModel.findOne({email: email})
        if (user) {
            return res.status(400).json({
                message: "User with this email already exists",
            })
        } else {
            const regUser = await userModel.create({
                name,
                email,
                password: hashedPassword,
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
// login user:
const loginUsers = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const {email} = req.body;
        const user = await userModel.findOne({email});
        if (!email) {
            return res.status(400).json({
                message: "Please enter an email",
            })
        }
        if(!user){
            return res.status(400).json({
                message: "Couldn't find user, user doesn't exist",
            })
        }
        return res.status(201).json({
            message: "User login successful",
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            message: "This user can't sign in. I dentification failed",
            data: error
        })
    }
}
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
const DeleteUsers = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const users = await userModel.deleteMany();
        return res.status(200).json({
            message: "Successfully deleted user details",
            data: users
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in deleting this user",
            data: error
        })
    }
}

export {getAllUsers, RegisterUsers, getSingleUser, loginUsers, DeleteUsers} 