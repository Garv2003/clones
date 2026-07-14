const mongoose = require("mongoose");
const { Schema } = mongoose;

const user_schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    min: [5, "At least of 5 length"],
    max: [10, "At Most of 10 length"],
  },
  Profile_image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: [6, "At least of six length"],
    max: [15, "At Most of 15 length"],
  },
  likedSongs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Music",
      required: true,
    },
  ],
  playLists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PlayLists",
    },
  ],
  premium: {
    type: String,
    duration: Number,
    price: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", user_schema);
