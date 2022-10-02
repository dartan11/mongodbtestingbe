const BaseController = require("./baseController");

class ChatroomController extends BaseController {
  constructor(model) {
    super(model);
  }

  createNew = async (req, res) => {
    console.log("worked");
    try {
      const output = await this.model.create({
        name: req.body.name,
        users: req.body.users,
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = ChatroomController;
