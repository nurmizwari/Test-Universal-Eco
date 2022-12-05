const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongoConnection");

class User {
  static user() {
    const users = getDB().collection("user");
    return users;
  }
  static findAll() {
    return this.user().find({}).toArray();
  }
  static findById(user_id) {
    return this.user().findOne({
      _id: ObjectId(user_id),
    });
  }
  static update(user_id, user) {
    // console.log(user_id, "user");
    // console.log(user_id, user, "<< uers");
    return this.user().updateOne(
      {
        _id: ObjectId(user_id),
      },
      user
    );
  }
}
module.exports = User;
