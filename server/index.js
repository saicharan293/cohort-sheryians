const express = require('express');

const app = express();

app.get("/data", (req, res)=>{
    const dummy=[
        {
            username: "Shiva",
            city: "kailas",
            age: 50
        }
    ]
    res.setHeader('Access-Control-Allow-Origin','http://localhost:5173').json({data: dummy})
})

app.listen('8000', ()=>{
    console.log('server is running on 8000');
})