import { getNextId, readPosts, readUsers, writeUsers } from "../utils/index.js";

export const GetAllPosts = async (req, res) => {
  try {
    res.status(200).send(await readPosts());
  } catch (err) {
    res.status(500).send(err);
  }
};

 