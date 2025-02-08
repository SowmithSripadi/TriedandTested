import express from "express";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import commentRouter from "./routes/comment.routes.js";
import connectDB from "./lib/connectDB.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.listen(3000, () => {
  connectDB();
  console.log("server is running!");
});
