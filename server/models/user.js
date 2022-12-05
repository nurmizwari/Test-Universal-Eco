const mongoose = require("mongoose");

let User = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  addr: [
    {
      street: String,
      house: String,
      city: String,
      country: String,
    },
  ],
});

module.exports = mongoose.model("user", User);
