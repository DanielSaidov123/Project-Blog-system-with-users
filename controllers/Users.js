import { getNextId, readPosts, readUsers, writeUsers } from "../utils/index.js";

export const GetAllUsers = async (req, res) => {
  try {
    res.status(200).send(await readUsers());
  } catch (err) {
    res.status(500).send(err);
  }
};

export const GetUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const userslist = await readUsers();
    const user = userslist.find((s) => s.id == id);
    if (!user) {
      return res.status(404).send({ msg: "student is not defind." });
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const CreateUser = async (req, res) => {
  try {
    const userslist = await readUsers();
    if (!req.body.name || !req.body.email || !req.body.username) {
      res.status(404).send({ err });
    }
    const newuser = {
      id: getNextId(userslist),
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
    };
    userslist.push(newuser);
    await writeUsers(userslist);
    res.status(200).send(newuser);
  } catch (err) {
    res.status(404).send({ err });
  }
};

export const updatingUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userslist = await readUsers();
    console.log(userslist);
    
    const user = userslist.find((u) => u.id == id);
    if (!user) {
      return res.status(404).send({ msg: "student is not defind." });
    }
    if (req.body.name) {
      user.name = req.body.name;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    if (req.body.username) {
      user.username = req.body.username;
    }
    await writeUsers(userslist);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ err });
  }
};


export const DelStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const userslist = await readUsers();
    const user = userslist.find((u) => u.id == id);
    if (!user) {
      return res.status(404).send({ msg: "user is not defind." });
    }
    const Postlist = await readPosts();
    const post=Postlist.find((p)=>p.authorId===id)
    if(post){
        return res.status(404).send({ msg: "The user has posts that I cannot delete." });
     };
     const Commentlist = await readPosts();
    const comment=Commentlist.find((c)=>c.authorId===id)
    if(comment){
        return res.status(404).send({ msg: "The user has comment that I cannot delete." });
     };
    const index = userslist.findIndex((s) => s.id == id);
    userslist.splice(index, 1);
    await writeUsers(userslist);
    res.status(200).send({});
  } catch (err) {
    res.status(500).send(err);
  }
};