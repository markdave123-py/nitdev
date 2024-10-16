import { Router } from "express";
import { sign_up, login, getAllUsers, userById, deleteUserById, getUserAccounts, verifyUser} from "./user.controller.js";

export const userRouter = Router()

userRouter.post('/sign-up', sign_up);
userRouter.post('/login', login);
userRouter.get('/get-users', verifyUser, getAllUsers);
userRouter.get('/get-users/:id', userById);
userRouter.delete('/delete-user/:id', deleteUserById);
userRouter.get('/accounts', verifyUser, getUserAccounts);
userRouter.get('/verify', verifyUser);
