import express from "express"
import {landContent,homeStyle, featureStyle,landCreature} from "../data/data.js";

const landRouter = express.Router();

landRouter.get("/",(req,res)=> {
    res.render("pages/home",{
        pageType : "land",
        pageTitle : "Land Creatures",
        styleSheet : [homeStyle],
        logo : "/images/land-icon.svg",
        content: landContent,
        renderPage : "home"
    });
})

landRouter.get("/:name",(req,res)=>{
    const creature = landCreature.find(creature => creature.name === req.params.name);
    console.log(creature)
    if(creature){
        res.render("pages/feature",{
            pageTitle : creature.name,
            styleSheet : [homeStyle,featureStyle],
            logo : creature.logo,
            subroute: creature,
            renderPage : "feature"
        }) 
    }
})


/*landRouter.get("/unicorn",(req,res)=> {
    let unicorn= landCreature[0]
    res.render("pages/feature",{
        bodyClass : "unicorn",
        pageTitle : "Unicorn",
        styleSheet : [homeStyle,featureStyle],
        logo : "/images/unicorn-face-svgrepo-com.svg",
        subroute: unicorn
    })
})

landRouter.get("/griffins",(req,res)=>{
    let griffin = landCreature[1]
    res.render("pages/feature",{
        pageTitle : "griffin",
        styleSheet : [homeStyle,featureStyle],
        logo : "/images/griffin-symbol-svgrepo-com.svg",
        subroute: griffin
    });
})*/
export default landRouter;