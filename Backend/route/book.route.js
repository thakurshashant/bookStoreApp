//here we will define the routes for the book model
import express from "express";
import {getBook} from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
export default router;