require('dotenv').config();

const app = require("./src/app");
const mongoose = require("mongoose");
const dns = require('dns');

dns.setServers(["1.1.1.1", "8.8.8.8"]);

async function connectToDb() {
    try {
        await  mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Database");
        app.listen(3000, () => {
            console.log("server is running on 3000");
        });

    } catch (error) {
        console.log("Failed to connect db", error.message);
        process.exit(1);
    }
}
connectToDb();
