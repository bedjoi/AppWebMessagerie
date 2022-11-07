const express= require('express');
const bodyParser= require('body-parser');
const cars= require('cars');
const mongoose= require('mongoose');
const passport= require('passport');
const passportLocal= require('passport-local').Strategy;
const cookieParser= require('cookie-parser');
const bcrypt= require('bcrypt');
const expressSession= require('express-session');

const app = express();

//Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));