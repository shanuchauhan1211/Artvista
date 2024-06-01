import express from "express";
import cors from "cors";

import User from "./router/auth-router.js";
import connectDb from "./utils/utils.js";
// import mw from "./middleware/auth.js";
// import auth from "./middleware/auth.js";
import Post from "./router/createPost.js";



const app = express();
const corsOptions = {
    origin: 'artvista-lovat.vercel.app', // or use an array for multiple origins
    optionsSuccessStatus: 200 // For legacy browser support
  };

app.use(express.json({limit:'50mb'}));
app.use(cors(corsOptions));

app.use("/User",User);
app.use("/Post",Post);

// app.get("/",(req,res)=>{
//      res.status(200).send("Welcom to server");
// });

// app.get("/register",(req,res)=>{
//     res.status(200).send("Welcom to registration port");
// });

const PORT = 5000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port : ${PORT}`);
})

});