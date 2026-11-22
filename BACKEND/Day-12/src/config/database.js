
const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers(['1.1.1.1','8.8.8.8']);

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error));
}

module.exports = connectToDb;