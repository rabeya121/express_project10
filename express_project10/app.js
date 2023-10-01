const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const { rateLimit } = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');
const multer  = require('multer');
const upload = multer();


const route = require("./src/Routes/api")


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 100,

});



app.use(limiter)
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(mongoSanitize())
app.use(helmet())
app.use(hpp())



app.use(upload.array())
app.use(express.static("public"))


app.use("/api/v1", route )


app.get("/", (req, res) =>{
    res.send("Hello World")
})


app.use("*", (req, res) =>{
	res.status(404).json({status: "fail", data: "Page Not Found"})
});


module.exports = app