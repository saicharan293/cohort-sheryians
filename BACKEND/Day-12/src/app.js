const express = require("express");

// Cookie storage:
// - Cookies can be accessed by both the client and server.
// - Unlike localStorage and sessionStorage, cookies are sent with each request.
// - cookie-parser reads incoming cookies and makes them available through req.cookies.
const cookieParser = require('cookie-parser');


const app = express();
const authRouter = require('./routes/auth.routes')

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);


module.exports = app;