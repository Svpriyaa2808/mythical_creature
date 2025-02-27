import express from "express";
import {waterContent,homeStyle, featureStyle,waterCreature} from "../data/data.js";

const waterRouter = express.Router();

waterRouter.get("/",(req,res)=>{
    res.render("pages/home", {
        pageType : "water",
        pageTitle : "Water Creatures",
        styleSheet: [homeStyle],
        logo : "/images/water-icon.svg",
        content : waterContent,
        renderPage : "home"
    });
});


waterRouter.get("/:name",(req,res)=>{
    const creature = waterCreature.find(creature => creature.name === req.params.name);
    console.log(creature)
    if(creature){
        res.render("pages/feature",{
            pageTitle : creature.name,
            styleSheet : [homeStyle,featureStyle],
            logo : creature.logo,
            subroute: creature,
            renderPage : "feature"
        });
    }
});

export default waterRouter;