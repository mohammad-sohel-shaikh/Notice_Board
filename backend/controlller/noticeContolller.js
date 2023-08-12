const noticeModel = require("../models/notice");
// const postModel=require("../models/post")

const createNotice = async (req, res) => {
  // const newFood=postModel({
  //     name:req.body.name,
  //     calories:req.body.calories
  // })
  // let id=105
  console.log(req.body)
  const newNotice = await noticeModel(req.body);
  try {
  
    await newNotice.save();
    res.send(newNotice);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getNotices = async (req, res) => {
  const allNotice = await noticeModel.find();
  try {
    res.send(allNotice);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getNotice = async (req, res, next) => {
  const notice = await noticeModel.findById(req.params.id).populate("userId")
  try {
    res.send(notice);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateNotice = async (req, res) => {
  console.log(req.params,req.body)
  try {
    await noticeModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200)
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteNotice = async (req, res) => {
  try {
    const notice = await noticeModel.findByIdAndDelete(req.params.id);
    if (!notice) res.status(404).send("no item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createNotice,
  getNotices,
  updateNotice,
  deleteNotice,
  getNotice,
};
