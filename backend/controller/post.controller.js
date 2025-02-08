import Post from "../models/posts.model.js";

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
  const { img, title, slug, desc, content, isFeatured, visit } = req.body;
  if (!img || !title || !slug || !desc || !content || !isFeatured || !visit) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newPost = new Post(req.body);
  const post = await newPost.save();
  res.status(200).json({ message: "Post received", data: post });
};
