const express = require('express');
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3000; //any port number availble on the server or 3000
const bodyParser = require("body-parser");
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/bootstrap", express.static("bootstrap"));
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));
app.use("/views",express.static("views"));
app.use("/images", express.static("images"));



mongoose.connect("mongodb://localhost:27017/ValueWealthDB");


//const bootstrap = require('bootstrap');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;

    res.send(fname + "<br>" + lname + "<br>" + email);
})
app.listen(port, () => {
    console.log('listening to port ' + port)
})
function myFunction(x) {
    x.classList.toggle("change");
}

//---------------------------------Handling admin register ---------------------------//


// const adminIdSchema = new mongoose.Schema({
//     admin_id: String
// });

// const AdminID = new mongoose.model("AdminID", adminIdSchema);

// AdminID.insertMany([
//     {admin_id : "a123"},
//     {admin_id : "b456"},
//     {admin_id : "c789"},
//     {admin_id : "d123"},
//     {admin_id : "e456"},
//     {admin_id : "g123"},
//     {admin_id : "i789"},
//     {admin_id : "j123"}
// ],function (err) {
//     if(err)console.log(err);
//     else console.log("Successfully added IDs");
// });

const registeredUserSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Why not name?"]
        },
        phone:{
            type:Number,
            max:9999999999,
            required:[true,"Why not phone?"]
        },
        email:{
            type:String,
            required:[true,"Why not email?"]
        },
        date:String

    }
);

const RegisteredUser = new mongoose.model("RegisteredUser",registeredUserSchema);


const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/adminRegister.html");
});

app.post("/register", function (req, res) {
    let adminID = req.body.adminID;


    AdminID.findOne({ admin_id: adminID }, function (err, foundID) {
        if (err) {
            console.log(err);
        } else {
            if (foundID) {
                //Since the id is found we will now create a new user.
                User.register({username: req.body.username}, req.body.password, function(err, user){
                    if (err) {
                      console.log(err);
                      res.redirect("/register");
                    } else {
                      passport.authenticate("local")(req, res, function(){
                        res.redirect("/dashboard");
                      });
                    }
                  });
                AdminID.deleteOne({ admin_id: adminID }, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Successfully removed ID");
                    }
                });
            }
            else {
                console.log("No id found!");
            }
        }
    });

});




//---------------------------------Handling admin login ---------------------------//
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/adminLogin.html");
});

app.post("/login", function (req, res) {
    
    
    const userLogin = new User({
        username: req.body.username,
        password: req.body.password
      });
    
      req.login(userLogin, function(err){
        if (err) {
          console.log(err);
        } else {
          passport.authenticate("local",{ successRedirect:'/dashboard',failureRedirect: '/login' } )(req, res, function(){
          });
        }
      });

});

//---------------------------------Handling Dashboard-----------------------------//
app.get("/dashboard", function(req, res){

    if (req.isAuthenticated()){
      RegisteredUser.find({},function (err,foundItems) {
          if (err) {
              console.log(err);
          } else {
              res.render('dashboard',{customers : foundItems});
          }
      })
    } else {
      res.redirect("/login");
    }
});


//--------------------------------Handling Courser ------------------------------------//

app.get("/course",(req,res)=>{
    res.sendFile(__dirname + "/course.html");
});

app.use(function (req, res, next) {
    res.status(404).render('invalidRes',{
        errorCode : 404, 
        errorHeading : "OOPS!",
        errorSubtext : "The page you are looking for is missing."})
}); 