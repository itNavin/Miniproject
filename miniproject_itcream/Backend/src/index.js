const express = require("express");
const mysql = require("mysql2"); //mysql2คือmariadb
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: 6105,
  user: "lab_qakle",
  password: "nfU3zESQKKb0NgIw",
  database: "lab_blank01_q3hwdr",
});

connection.connect(() => {
	console.log("Database is connected");
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 3000;

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

// Register endpoints
app.post("/login", require("./routes/login"));
app.post("/register", require("./routes/register"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});