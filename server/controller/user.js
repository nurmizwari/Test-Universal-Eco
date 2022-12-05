const User = require("../models");
class Controller {
  static async getData(req, res) {
    try {
      //   console.log("masuk");
      let data = await User.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async getDataById(req, res) {
    try {
      let data = await User.findById(req.params.user_id);
      if (!data) {
        res.status(404).json({ message: "data not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async UpdateById(req, res) {
    try {
      let { email } = req.body;
      console.log(email);
      let data = await User.update(req.params.user_id, {
        $set: { email },
      });
      if (!data) {
        res.status(404).json({ message: "data not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = Controller;
