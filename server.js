const fs = require("fs");
const path = require("path");

const express = require("express");
const createLog = require("./createLog");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/bin", async function (req, res) {
  try {
    createLog(JSON.stringify(req.body));

    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
});

app.get("*", function (req, res) {
  return res.send(`express sample page &#128519  `);
});

const PORT = 9900;
app.listen(PORT, function () {
  console.log(`Server running on PORT=${PORT}`);
});
