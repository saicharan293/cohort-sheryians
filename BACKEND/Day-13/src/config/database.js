const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to db"))
    .catch(err => console.error(err))
}

module.exports = connectToDb;