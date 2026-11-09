var express = require('express');
var app = express();


app.get("/", (req, res)=>{
    res.send("first response")
});

app.get("/about", (req, res) => {
    res.send("about response");
})

app.get("/home", (req, res)=>{
    res.send("Home page")
})

app.listen(3000, ()=>{
    console.log('server in running'); 
});
