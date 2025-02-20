import express from "express"

const landRouter = express.Router();

landRouter.get("/",(req,res)=> {
    res.render("pages/home");
})

landRouter.get("/dragons",(req,res)=> {
    res.send("dragons")
})

landRouter.get("/griffins",(req,res)=>{
    res.send("griffins");
})
export default landRouter;