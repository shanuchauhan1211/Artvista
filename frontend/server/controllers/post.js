import AddPostModel from "../Models/postmodel.js";




const CreatePost = async(req,res) => {
    const {title,description,accountId} = req.body;
    const imageName = req.file.filename;

try{

    const newPost = await  AddPostModel.create({
        title,
        description,
        image:imageName,
        accountId
      });
      
      console.log("Post saved Successfully :", newPost);
      return res.status(200).json({post:newPost});
    } 
     catch (error) {
        console.error("Error Creating New Post")
    return   res.status(400).json({message:error});
    }
};

const ShowPost = async (req, res) => {
    try {
      const userid =  req.params.id;
      console.log(userid)
      const ShowUser = await AddPostModel.find({accountId:userid});
  
      if (!ShowUser) {
        return res.status(404).json({ message: " Invalid account NO data " });
      }
else{
   res.status(200).json(ShowUser);
}
      }
     catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  const PostDelete = async(req,res) =>{
    try{
      const {id} = req.params;
      
      const postToDelete = await AddPostModel.findById(id);

      if(!postToDelete)
      {
        return res
        .status(404)
        .json({ message: "File with given ID not found!!" });

      }
      else {
        await AddPostModel.findByIdAndDelete(id);
        return res.status(200).json({ message: "Post deleted Successfully!!" });

    }
  }
    catch(error){
      return res.status(500).json({ message: error.message });

    }
  }


export {CreatePost, ShowPost,PostDelete};
