import express from "express";
import { } from "../controllers/Users.js"
import { GetAllPosts } from "../controllers/Posts.js";
const router = express.Router();



router.route('/').get(GetAllPosts) 
// router.route('/:id').get(GetUserByID).put(updatingUser).delete(DelStudent)


export default router;