const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //any port number availble on the server or 3000
const bodyParser = require("body-parser");
const path = require('path');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req, res)=>
{
    res.sendFile(__dirname + "/public/index.html");
});
app.post("/",function(req,res)
{
    var fname =req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;

    res.send(fname +"<br>"+lname+"<br>"+email);


})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})