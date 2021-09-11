const express = require('express');
const app = express();

//const bootstrap = require('bootstrap');

const port = process.env.PORT || 3000; //any port number availble on the server or 3000
const bodyParser = require("body-parser");
const path = require('path');
app.use(bodyParser.urlencoded({extended:true}));

app.use("/bootstrap",express.static("bootstrap"));
app.use("/css",express.static("css"));
app.use("/js",express.static("js"));
app.use("/images",express.static("images"));
app.get("/",(req, res)=>
{
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res)
{
    var fname =req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;

    res.send(fname +"<br>"+lname+"<br>"+email);


})
app.listen(port,()=>{
    console.log('listening to port ' +  port)
})
function myFunction(x) {
    x.classList.toggle("change");
}