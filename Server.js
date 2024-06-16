//importing all needed npm packages;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRoute')

//using the npm modules + middlewares;
const app = express();
const port = 5000;

//middleware setup;
app.use(cors())
app.use(express.json())

//assigning the routes for the users;
app.use(userRouter)

app.listen(port, () => { console.log("Server started") })