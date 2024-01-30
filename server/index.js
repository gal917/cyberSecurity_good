const express = require("express"); 
const app = express();
const PORT = 8080;
const mysql = require("mysql");
const cors = require('cors')
const bodyParser = require('body-parser')

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1", 
  password: "1234",
  database: "usersdata"
});

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", (req, res) => {
  console.log(req.body)
  res.send(JSON.stringify(req.body))
});

app.listen(PORT, () => {
  console.log("Server is running");
});