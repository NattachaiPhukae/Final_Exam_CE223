const express = require('express');
const app = express();

const port = 8080;

var id = 1480901543;
var status = "single";
var mascots = [
    { name : ""},
    { name : ""},
    { name : ""}
]

app.set('view engine','ejs')
app.use(express.static('public'))

app.get("/get",(req,res) =>{
    res.send ("This is get method");
})

app.get("/",(req,res) =>{
    res.render('index',{studentid : id , status : status,
    objmascots : mascots})
})
app.get("/index2",(req,res)=>{
    res.render('index2')
})

app.listen(port,() => {
    console.log ("Server is Listening on port: ",port)
})