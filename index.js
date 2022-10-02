require("dotenv").config();

const { auth } = require("express-oauth2-jwt-bearer");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const app = express();
const connectDB = require("./config/database");
connectDB();

// import Mongo Models
const userModel = require("./models/userModel");
const chatroomModel = require("./models/chatroomModel");

//import controllers
const UserController = require("./controllers/userController");
const ChatroomController = require("./controllers/chatroomController");

//import routers
const UserRouter = require("./routers/userRouter");
const ChatroomRouter = require("./routers/chatroomRouter");

//initializing controllers
const userController = new UserController(userModel);
const chatroomController = new ChatroomController(chatroomModel);

//initializing routers
const userRouter = new UserRouter(userController);
const chatroomRouter = new ChatroomRouter(chatroomController);

app.use(express.json());
app.use(cors());

const checkJwt = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER,
});

app.use("/users", userRouter.routes());
app.use("/chatroom", chatroomRouter.routes());

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
