import express from "express";
import {CreateUser, DelStudent, GetAllUsers, GetUserByID, updatingUser} from "../controllers/Users.js"
const router = express.Router();



router.route('/').get(GetAllUsers).post(CreateUser)
router.route('/:id').get(GetUserByID).put(updatingUser).delete(DelStudent)


export default router;