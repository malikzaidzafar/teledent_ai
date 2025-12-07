const express = require("express");
const app = express();
const userRoutes = require('./routes/user.routes.js');


app.use(express.json());
app.use('/users', userRoutes);

app.get("/", (req, res) => {
    res.send("Teledent AI backend is running");
});

module.exports = app; 
