const express = require("express");
const mysql = require("mysql"); 
const cors = require('cors')
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser')

const db = mysql.createConnection({
  user: "root",
  host: "localhost", 
  password: "",
  database: "signinemployee"
});

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
  const values = [
   req.body.username,  
   req.body.password
  ];
 
  db.query(sql, values, (err, data) => {
   if (err) {
     return res.json("Login Failed");
   }
   return res.json(data);
  });
 });
 