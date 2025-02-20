import express from "express";

const waterRouter = express.Router();

waterRouter.get("/",(req,res)=>{
    res.render("pages/home");
})

waterRouter.get("/krakens",(req,res)=>{
    res.send("krakens")
})

waterRouter.get("/mermaids",(req,res)=>{
    res.send("mermaids")
})

export default waterRouter;