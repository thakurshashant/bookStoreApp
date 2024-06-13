//defining schema for our user model
// basically creating a log in amd register authenications

import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    fullname:{
        type:String, 
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    
})

const User=mongoose.model('User',userSchema) //creating a model from the schema

export default User; //exporting the model to use it in other files