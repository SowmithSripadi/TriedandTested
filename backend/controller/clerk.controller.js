import { Webhook } from "svix";
import User from "../models/user.model.js";
import Post from "../models/posts.model.js";
import Comment from "../models/comment.model.js";

export const clerkWebhooks = async (req, res) => {
  const secret = process.env.WEBHOOK_SECRET_KEY;
  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(secret);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    return res.status(400).json({
      message: "Couldn't verify the payload",
    });
  }
  // console.log(evt.data);

  if (evt.type === "user.created") {
    try {
      const newUser = new User({
        clerkUserId: evt.data.id,
        username:
          evt.data.username || evt.data.email_addresses[0].email_address,
        email: evt.data.email_addresses[0].email_address,
        img: evt.data.image_url,
      });
      await newUser.save();
      return res.status(200).json({
        message: "User created",
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  }

  if (evt.type === "user.deleted") {
    try {
      const delUser = await User.findOne({ clerkUserId: evt.data.id });
      if (delUser) {
        await Post.deleteMany({ user: delUser._id });
        await Comment.deleteMany({ user: delUser._id });
        await delUser.deleteOne();
      } else {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({
        message: "User deleted",
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  }

  if (evt.type === "user.updated") {
    try {
      const updateData = {};
      if (evt.data?.username || evt.data?.email_addresses[0]?.email_address) {
        updateData.username =
          evt.data.username || evt.data?.email_addresses[0]?.email_address;
      }
      if (evt.data?.email_addresses[0]?.email_address) {
        updateData.email = evt.data.email_addresses[0]?.email_address;
      }
      if (evt.data?.image_url) {
        updateData.img = evt.data.image_url;
      }
      // Ensure we only update if there's valid data
      if (Object.keys(updateData).length > 0) {
        const updatedUser = await User.findOneAndUpdate(
          { clerkUserId: evt.data.id },
          { $set: updateData }, // `$set` only updates specified fields, leaving others unchanged
          { new: true } // Returns the updated document
        );

        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }
      }
      return res.status(200).json({
        message: "User updated",
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  }
};
