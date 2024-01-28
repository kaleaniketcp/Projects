import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../controllers/verifyToken.js";

const router = express.Router();

//ADD POST
router.post("/", verifyToken, addPost);

//GET POST
router.get("/", getPosts);

//GET POST
router.get("/:id", getPost);

//UPDATE
router.patch("/:id", verifyToken, updatePost);

//DELETE
router.delete("/:id", verifyToken, deletePost);

export default router;
