import express from "express";
import { GetAllPosts, GetPostByID } from "../controllers/Posts.js";
const router = express.Router();



router.route('/').get(GetAllPosts) 
router.route('/:id').get(GetPostByID) 


export default router;