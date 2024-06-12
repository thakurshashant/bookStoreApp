//writing the functionality for the book controller

import Book from "../model/book.model.js"; //importing model

export const getBook=async(req, res)=> {
    try{
        const book = await Book.find();
        res.status(200).json(book)
    }catch(error){
        console.log("Error" , error);
        res.status(500).json(error)
    }
        
}