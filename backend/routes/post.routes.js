import express from "express";
import {
  getPosts,
  getslugPosts,
  createPost,
} from "../controller/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:slug", getslugPosts);
router.post("/", createPost);

export default router;
