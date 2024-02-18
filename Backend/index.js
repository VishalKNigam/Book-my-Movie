const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const { userRouter } = require("./router/user.router");
const { movieRouter } = require("./router/movie.router");

app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/movies', movieRouter);

app.get("/", (req, res) => {
    res.send("🎟️ Welcome aboard! Let's navigate your journey through the pages of excitement! 📘")
})
app.listen(process.env.PORT, async () => {
    try {
        const connection = mongoose.connect(process.env.mongoURL);
        console.log("Connection to the DB Successfully!!");
    } catch (error) {
        console.log(error);
    }
})
