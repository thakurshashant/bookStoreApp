// we define function in controller and call the function in route

import User from '../models/user.model.js';


export const signup=(req, res)=>{
    try {
        const {fullname , email , password}=req.body; //here we are accessing for name , email of user
        const user=User.findOne({email}) //checking if the user is already present in the database
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        const createdUser=new User({
            fullname,
            email,
            password
        })
        createdUser.save();  //saving the new user data
        res.status(201).json({message:"User created successfully"});
    } catch (error) {
        console.log("Error:"+ error.message);
        res.status(500).json({message: "Internal server error"})
    }
}