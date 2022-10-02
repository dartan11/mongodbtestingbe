const mongoose = require("mongoose");

const ChatroomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    users: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chatroom", ChatroomSchema);
