import express from "express";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import commentRouter from "./routes/comment.routes.js";
import connectDB from "./lib/connectDB.js";
import webhookRouter from "./routes/webhook.routes.js";
import "dotenv/config";
import { clerkMiddleware, requireAuth } from "@clerk/express";

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/webhooks", webhookRouter);
app.use(clerkMiddleware());

app.get("/test1", requireAuth(), (req, res) => {
  const { userId } = req.auth;
  if (!userId) {
    return res.status(404).json({
      mesage: "User not authenticated",
    });
  }
  return res.status(200).json({
    userid: userId,
  });
});

app.use(express.json());
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => {
  connectDB();
  console.log("server is running!");
});
