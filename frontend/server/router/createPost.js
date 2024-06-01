import express from "express";
import multer from "multer";
const router = express.Router();
// import auth from "../middleware/auth.js";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../src/assets/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,  uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

import { CreatePost,PostDelete,ShowPost} from "../controllers/post.js";
//const register = require("../controllers/auth-controller.js");
router.post("/createPost",upload.single('image'),CreatePost);
router.route("/showPost/:id").get(ShowPost);
router.route("/PostDelete/:id").delete(PostDelete);






export default router;