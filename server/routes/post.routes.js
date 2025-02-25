import express from "express";
import {
  getPosts,
  getslugPosts,
  createPost,
  deletePost,
  uploadAuth,
} from "../controller/post.controller.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);
router.get("/", getPosts);
router.get("/:slug", getslugPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
