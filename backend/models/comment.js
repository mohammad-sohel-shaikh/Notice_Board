const { default: mongoose } = require("mongoose");

const CommentSchema = new mongoose.Schema({

  comment: {
    type: String,
  },
  postId:{type:mongoose.Schema.ObjectId,ref:'posts'}
});
// FoodSchema.virtual('fullname').s
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
