const dotenv = require("dotenv");
dotenv.config();
const express= require('express');
const bodyParser= require('body-parser');
const cors = require("cors");
const mongoose= require('mongoose');
const passport= require('passport');
const passportLocal= require('passport-local').Strategy;
const cookieParser= require('cookie-parser');
const bcrypt= require('bcrypt');
const session= require('express-session');
const User = require("./user");
const app = express();

mongoose.connect(`mongodb+srv://{process.env.DBUSER}:{process.env.DBPASSWOERD} @cluster0.2qyykqo.mongodb.net/?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
)

//Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
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
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
          });
          await newUser.save();
          res.send("User Created");
        }
      });
})



app.listen(4000, ()=>{
    console.log(`le serveur est a l ecoute sur le port 4000`) 
})