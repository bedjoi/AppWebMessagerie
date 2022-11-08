const express= require('express');
const bodyParser= require('body-parser');
const cors = require("cors");
const mongoose= require('mongoose');
const passport= require('passport');
const passportLocal= require('passport-local').Strategy;
const cookieParser= require('cookie-parser');
const bcrypt= require('bcrypt');
const session= require('express-session');

const app = express();

//Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors ({
    origin: "http://localhost:3000", //adresse de port par defaut de react
    Credential: true
}))

app.use(session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser("secretcode"));

//routes

app.get("/user", (req,res)=>{});

app.post("/login", (req,res)=>{
    console.log(req.body)
});
app.post("/register", (req,res)=>{
    console.log(req.body)
})



app.listen(4000, ()=>{
    console.log(`le serveur est a l ecoute sur le port 4000`) 
})