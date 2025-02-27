import express from "express";
import landRouter from "./routes/land_router.js";
import waterRouter from "./routes/water_router.js";
import * as dotenv from "dotenv";
import * as path from "path";
import { homeContent,homeStyle} from "./data/data.js"; 

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.set("view engine","ejs");
const __dirname = path.resolve();
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=> {
    res.render("pages/home",{
        pageTitle : "Mythical creatures",
        pageType : "home",
        styleSheet : [homeStyle],
        logo : "/images/alien-monster-svgrepo-com.svg",
        content: homeContent,
        renderPage : "home"
    });
});

app.use("/landcreation",landRouter);
app.use("/watercreation",waterRouter);
app.listen(PORT,() =>console.log(`LISTENING ON PORT : ${PORT}`))



//want to add home page for land and water by constructor
//style those heading and content
//create constructor for creatures