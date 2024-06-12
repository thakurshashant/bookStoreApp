import mongoose from "mongoose";

//create a schema
//what is schema?
//Schema is a blueprint of the database which defines the structure of the database.
//for our data
const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

//creating a model for our schema
//what is model?
//Model is a class with which we construct documents.

const Book=mongoose.model("Book",bookSchema);

export default Book;;