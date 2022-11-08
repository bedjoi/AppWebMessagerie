const express= require('express');
const bodyParser= require('body-parser');
const cars= require('cars');
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

app.use(cars({
    origin: "http://localhost:300", //adresse de port par defaut de react
    Credential: true
}));

app.use(session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser("secretcode"));

app.listen(4000, ()=>{
    console.log(`le serveur est a l ecoute sur le port 4000`) 
})