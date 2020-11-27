const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jeopardyInfoSchema = new Schema({
  questionInfo: [
    {
      question: { type: String },
      correctAnswer: { type: String },
      answerChoices: { type: String },
      value: { type: Number },
    },
  ],
  userInfo: [
    {
      name: { type: String, required: true, unique: true },
      score: { type: Number },
    },
  ],
});

const JeopardyInfo = mongoose.model("JeopardyInfo", jeopardyInfoSchema);
module.exports = JeopardyInfo;
