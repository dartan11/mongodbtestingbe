const express = require("express");
const router = express.Router();

class ChatroomRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    router.get("/", this.controller.getAll);
    router.post("/", this.controller.createNew);

    return router;
  }
}

module.exports = ChatroomRouter;
