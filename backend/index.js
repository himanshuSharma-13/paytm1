// backend/index.js
const express = require("express");
// frontend aur backend commmunication ke lie::
const cors = require("cors");
const port=3000;
const app = express();
const mainRouter = require("./routes/index");
app.use(cors);
app.use(express.json()) // body parser : lets you parse json objects

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1", mainRouter); // /api/v1 ye wale routes route folder ke index file ko bhejdo

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
