const comemntModel=require("../models/comment")

const createCommetnt=async(req,res)=>{

    const newFood= await comemntModel(req.body)
    try{
        await newFood.save()
        res.send(newFood)
    }
    catch(error){
        res.status(500).send(error)
    }
}

const commentbypostid=async(req,res)=>{
    const allFood=await comemntModel.find({postId:req.params.id})
    try{
        res.comment = allFood;
        res.json({
            post: res.post,
            comment : res.comment
        })
    }
    catch(err){ 
        res.status(500).send(err)
    }

}

module.exports={createCommetnt,commentbypostid}