const express=require("express")
const router=express.Router();
const noticeContro=require("../controlller/noticeContolller")
const commentCnt=require("../controlller/commentCnt")

router.post('/add-notice',noticeContro.createNotice)

router.get('/notice',noticeContro.getNotices)

router.get('/notice/:id',noticeContro.getPost)


router.put('/edit-notice/:id',noticeContro.updateNotice)

router.delete('/notice/:id',noticeContro.deleteNotice);    

module.exports=router;