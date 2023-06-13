const mysql = require("mysql2");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
	const username = req.body.username;
  const email = req.body.email;
  const address = req.body.address;
	const password = req.body.password;

  const hashedpassword = await bcrypt.hash(password, 10);
	
  connection.query(
    `INSERT INTO users (username, email, address, hashed_password) VALUES (?, ?, ?, ?)`,
    [username, email, address, hashedpassword], (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        // Return data to the client if success
        console.log(rows);
        if (rows) {
          res.json({
            success: true,
            data: {
              message: "create success",
            },
          });
        }
      }
    }
  )
	
};