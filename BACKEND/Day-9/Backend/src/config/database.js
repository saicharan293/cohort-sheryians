const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(["1.1.1.1", '8.8.8.8']);

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to db");
    })
}

module.exports = connectToDb;