import Post from "../models/posts.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  console.log(posts);
  res.status(200).json(posts);
};

export const getslugPosts = async (req, res) => {
  const posts = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(posts);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  console.log(req.headers);

  if (!clerkUserId) {
    return res.status(401).json("Not Authenticated");
  }

  const user = await User.findOne({ clerkUserId: clerkUserId });
  if (!user) {
    return res.status(404).json("User not found");
  }

  const { img, title, slug, desc, content, isFeatured, visit } = req.body;
  if (!img || !title || !slug || !desc || !content || !isFeatured || !visit) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const newPost = new Post({ user: user._id, ...req.body });
    const post = await newPost.save();
    res.status(200).json({ message: "Post received", data: post });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("user  not authenticated!");
  }

  const user = await User.findOne({ clerkUserId: clerkUserId });
  const delPost = await Post.findOneAndDelete({
    _id: req.params.id,
    user: user._id,
  });
  if (!delPost) {
    return res
      .status(403)
      .json({ message: "No post found with your user details" });
  }
  return res.status(200).json({ message: "deleted!!", data: delPost });
};
