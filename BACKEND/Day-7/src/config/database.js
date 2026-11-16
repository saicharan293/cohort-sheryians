
const mongoose = require('mongoose');
async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to db");
    } catch (error) {
        console.log("Failed to connect to db", error.message);
        process.exit(1);
    }
}

module.exports = connectToDb;