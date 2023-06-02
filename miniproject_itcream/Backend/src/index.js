const cors = require("cors") ;
const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const port = 3001;

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: 6105,
  user: "lab_qakle",
  password: "nfU3zESQKKb0NgIw",
  database: "lab_blank01_q3hwdr",
});

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

connection.connect();

console.log("Database is connected");

app.use(bodyParser.json({ type: "application/json" }));

app.use(cookieParser());
app.post("/login", require("./routes/login"));
app.post("/register", require("./routes/register"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});