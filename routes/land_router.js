import express from "express"
import {landContent} from "../data/data.js";

const landRouter = express.Router();

landRouter.get("/",(req,res)=> {
    res.render("pages/home",{
        pageType : "land",
        pageTitle : "Land Mythical Creatures 🌍🦄🦁",
        content : landContent
    });
})

landRouter.get("/unicorn",(req,res)=> {
    res.send("dragons")
})

landRouter.get("/griffins",(req,res)=>{
    res.send("griffins");
})
export default landRouter;