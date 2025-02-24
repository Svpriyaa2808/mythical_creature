import express from "express";
import landRouter from "./routes/land_router.js";
import waterRouter from "./routes/water_router.js";
import * as path from "path";

const app = express();
const PORT = 3011;

app.set("view engine","ejs");
const __dirname = path.resolve();
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=> {
    res.render("pages/feature",)
})

app.use("/landcreation",landRouter);
app.use("/watercreation",waterRouter);
app.listen(PORT,() =>console.log(`LISTENING ON PORT : ${PORT}`))