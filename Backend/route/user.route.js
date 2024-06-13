//defining routes for the user model
import express from 'express';
import { signup } from '../controller/user.controller.js';
const router=express.Router();


router.post("/signup" , signup); //calling the signup function from user.controller.js


export default router;