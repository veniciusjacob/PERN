
import { createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService } from "../models/userModel.js";

const handleResponse = (res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data
    });
}


const createUser = async (req, res, next) => {
    const {name, email} = req.body;
    try{
        const newUser = await createUserService(name, email);
        handleResponse(res, 201, "User created successfully", newUser);
    }catch(err){
        next(err);
    }
}

const getAllUsers = async (req, res, next) => {
    try{
        const users = await getAllUsersService();
        handleResponse(res, 200, "User fetched successfully", users);
    }catch(err){
        next(err);
    }
}

const getUserById = async (req, res, next) => {
    try{
        const user = await getUserByIdService (req.params.id);
        if(!user){
            return handleResponse(res, 404, "User not found");
        }
        handleResponse(res, 200, "User fetched successfully", user);
    }catch(err){
        next(err);
    }
}

const updateUser = async (req, res, next) => {
    const {name, email} = req.body;
    try{
        const user = await updateUserService (req.params.id, name, email);
        if(!user){
            return handleResponse(res, 404, "User not found");
        }
        handleResponse(res, 200, "User uptaded successfuly", user);
    }catch(err){
        next(err);
    }
}

const deleteUser = async (req, res, next) => {
    try{
        const user = await deleteUserService (req.params.id);
        if(!user){
            return handleResponse(res, 404, "User not found");
        }
        handleResponse(res, 200, "User deleted successfuly", user);
    }catch(err){
        next(err);
    }
}

export { createUser, getAllUsers, getUserById, updateUser, deleteUser };


