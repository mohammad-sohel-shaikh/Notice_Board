const { default: mongoose } = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required:true
    },
    description: {
      type: String,
      required:true
    },
    userId:{type:mongoose.Schema.ObjectId,ref:'User'}
  },
  { timestamps: true }
);
module.exports = mongoose.model("notice", noticeSchema);
