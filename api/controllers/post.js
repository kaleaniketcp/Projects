import Post from "../models/Post.js";

//GET POSTS
export const getPosts = async (req, res, next) => {
  try {
    if (req.query.cat) {
      const q = req.query.cat;
      const posts = await Post.find({ cat: q });
      res.status(200).send(posts);
    } else {
      const posts = await Post.find();
      res.status(200).send(posts);
    }
  } catch (err) {
    next(err);
  }
};

//GET POST
export const getPost = async (req, res, next) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    if (post) {
      res.status(200).send(post);
    } else {
      res.status(400).send("Post not found.");
    }
  } catch (err) {
    next(err);
  }
};

//ADD POST
export const addPost = async (req, res, next) => {
  try {
    const newPost = new Post({
      author: req.user.id,
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      cat: req.body.cat,
    });

    await newPost.save();
    res.status(200).send("Post has been created.");
  } catch (err) {
    next(err);
  }
};

//DELETE
export const deletePost = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Post.findByIdAndDelete(id);
    res.status(200).send("Post has been deleted");
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updatePost = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updatedHotel = await Post.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    res.status(200).send(updatedHotel);
  } catch (err) {
    next(err);
  }
};
