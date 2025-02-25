import express from "express";
import {waterContent} from "../data/data.js";
const waterRouter = express.Router();

waterRouter.get("/",(req,res)=>{
    res.render("pages/home", {
        pageType : "water",
        pageTitle : "Water Mythical Creatures 🌊🐉🐚",
        content : waterContent
    });
})

waterRouter.get("/hydra",(req,res)=>{
    res.send("krakens")
})

waterRouter.get("/mermaids",(req,res)=>{
    res.send("mermaids")
})

export default waterRouter;