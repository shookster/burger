const express = require("express");

const PORT = process.env.PORT || 8000 

const app = express()

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))

app.use(express.json())

const expressHBS = require("express-handlebars")

app.engine("handlebars", expressHBS({defaultLayout: "main"}))

app.set("view engine", "handlebars")

const routes = require("./controllers/burgers_controller.js")

app.use(routes)

app.listen(PORT, function(){

    console.log("app is listening on port: "+ PORT)
})