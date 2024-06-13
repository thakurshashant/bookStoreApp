//defining routes for the user model
import express from 'express';
import { signup } from '../controller/user.controller.js';
import { login } from '../controller/user.controller.js';
const router=express.Router();


router.post("/signup" , signup); //calling the signup function from user.controller.js
router.post("/login" , login); //calling the login function from user.controller.js

export default router; 