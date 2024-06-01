import mongoose from "mongoose"; 

const AddPostSchema = new mongoose.Schema({
     title: { type: String, required: true, default: "" },
     description: { type: String, required: true, default: "" },
     date: { type: Date, default: Date.now},
     image:{type:String},
     accountId:{type: String,default:"" }

});

const AddPostModel = mongoose.model('AddPost', AddPostSchema);



export default AddPostModel;