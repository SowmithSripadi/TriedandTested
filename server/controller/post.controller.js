import Post from "../models/posts.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  // console.log(posts);
  res.status(200).json(posts);
};

export const getslugPosts = async (req, res) => {
  const posts = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(posts);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  // console.log(req.headers);

  if (!clerkUserId) {
    return res.status(401).json("Not Authenticated");
  }

  const user = await User.findOne({ clerkUserId: clerkUserId });
  if (!user) {
    return res.status(404).json("User not found");
  }

  const { title, desc, content, isFeatured, visit } = req.body;
  if (!title || !desc || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let slug = title.replace(/ /g, "-").toLowerCase();
  let existingPosts = await Post.findOne({ slug });
  let counter = 2;
  while (existingPosts) {
    slug = `${slug}-${counter}`;
    existingPosts = await Post.findOne({ slug });
    counter++;
  }

  const samePost = await Post.findOne({
    user: user._id,
    desc: desc,
    content: content,
  });
  if (samePost) {
    return res.status(400).json({ message: "Same post found" });
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });
  const post = await newPost.save();
  res.status(200).json({ message: "Post received", post });
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

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
