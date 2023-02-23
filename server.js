const express = require("express");
const app = express();
const path = require("path")
const fs = require("fs")
const  PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname+"/public")));

//note route**
// const allRoutes = require("./controllers")
// app.use(allRoutes);
require("./controllers/frontendController")(app)
require("./controllers/notesControllers")(app)





app.listen(PORT, function(){
    console.log(`listening on ${PORT}`)
})