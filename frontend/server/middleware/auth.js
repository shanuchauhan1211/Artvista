import  jwt from "jsonwebtoken";

const auth = async (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
        let decodedData;
        if(token){
    try {
           
        {
            decodedData = jwt.verify(token, 'test');
            req.userId= decodedData?.id;
        
next();
    } 
}catch (error) {
        console.log(error);
        res.redirect("/logIn");
    }

}
else{
    res.status(401).send('Unauthorized');
}

};

export default auth;