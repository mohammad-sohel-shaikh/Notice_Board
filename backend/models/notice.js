const { default: mongoose } = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    userId:{type:mongoose.Schema.ObjectId,ref:'users'}
  },
  { timestamps: true }
);
module.exports = mongoose.model("notice", noticeSchema);
