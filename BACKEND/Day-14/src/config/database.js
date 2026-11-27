require('dotenv').config();
const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(['1.1.1.1', '8.8.8.8']);

async function connectToDb(){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to db");
}

module.exports = connectToDb;