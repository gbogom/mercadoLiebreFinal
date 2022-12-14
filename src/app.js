const express = require('express');
const app= express();
const path = require('path');
app.use(express.static('public'));

// app.listen(3030,()=>console.log("Server running http://localhost:3030"))
const port= process.env.PORT || 3030;
app.listen(port,()=>console.log("Server running http://localhost:" + port))

let home = path.resolve(__dirname,'./views/home.html');
let register = path.resolve(__dirname,'./views/register.html');
let login = path.resolve(__dirname,'./views/login.html');

app.get('/', function(req,res){
    res.sendFile(home);
})

app.get('/register', function(req,res){
    res.sendFile(register);
})

app.get('/login', function(req,res){
    res.sendFile(login);
})