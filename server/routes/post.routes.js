import express from "express";
import {
  getPosts,
  getslugPosts,
  createPost,
  deletePost,
} from "../controller/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:slug", getslugPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
