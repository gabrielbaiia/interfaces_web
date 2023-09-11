const express = require('express')
const app = express()


app.get("/", function(req,res){
    res.send("Minha primeira página")
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre")
})

app.get("/historia", function(req,res){
    res.send("Minha pagina de historia")
})

app.get("/caneca", function(req,res){
    res.sendFile(__dirname + "/html/caneca.html")
})

app.get("/copo", function(req,res){
    res.sendFile(__dirname + "/html/copo.html")
})





app.listen(8081, function(req,res){
    console.log("Servidor Funcionando!!")
})

