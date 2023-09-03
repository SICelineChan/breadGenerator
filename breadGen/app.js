const express = require("express");
const app = express();

const port = 3000;
const flour = ["Rye", "Whole-grain", "All-purpose", "High-Gluten"];
const seeds = ["Sesame", "Poppy-seeds", "Sunflower-seeds", "Pumpkin-seeds"];


app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}))

app.get("/", function (req, res) {
    res.render("homepage.ejs", {Flour: flour});
})

app.post("/submit", function (req, res){
 

const randomFlour = flour[Math.floor(Math.random() * flour.length)];
const randomSeeds = seeds[Math.floor(Math.random() * seeds.length)]
res.render("homepage.ejs", {TypeFlour: randomFlour , TypeSeeds: randomSeeds} )
})


app.listen(port, function (){
    console.log("listening to port " + port)
})


