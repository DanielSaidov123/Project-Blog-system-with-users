import { getNextId, readPosts, readUsers, writePosts, writeUsers } from "../utils/index.js";

export const GetAllPosts = async (req, res) => {
  try {
    res.status(200).send(await readPosts());
  } catch (err) {
    res.status(500).send(err);
  }
};

export const GetPostByID = async (req, res) => {
  try {
    const id = req.params.id;
    const postslist = await readPosts();
    const post = postslist.find((p) => p.id == id);
    if (!post) {
      return res.status(404).send({ msg: "post is not defind." });
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const CreateUser = async (req, res) => {
  try {
    const postslist = await readUsers();
    if (!req.body.authorId || !req.body.name) {
      res.status(404).send({ err });
    }
    const newpost = {
      id: getNextId(postslist),
      title: req.body.title || "",
      name: req.body.name,
      content: req.body.content || "",
      createdAt: new Date(),
      tags: req.body.tags || [],
    };
    postslist.push(newpost);
    await writePosts(postslist);
    res.status(200).send(newpost);
  } catch (err) {
    res.status(404).send({ err });
  }
};
