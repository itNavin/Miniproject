const mysql = require('mysql2');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const address = req.body.address;
  const password = req.body.password;

  console.log(req.body);

  // Check if the username already exists
  var checkUsernameSql = mysql.format('SELECT COUNT(*) AS count FROM users WHERE username = ?', [req.body.username ]);

  connection.query(checkUsernameSql, (err, result) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    const count = result[0].count;

    if (count > 0) {
      // Username already exists, return an error response
      return res.json({
        success: false,
        message: 'Username is already taken',
      });
    }

    // Check if any required field is missing
    if (!username || !password) {
      return res.json({
        success: false,
        message: 'Please provide all the required information',
      });
    }

    // Generate a hash of the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Error hashing password',
        });
      }

      // Insert the new user with the provided username and hashed password
      var insertUserSql = mysql.format('INSERT INTO users (username, hashedPassword, password , address , email  , profile) VALUES (?, ?, ?, ?, ? , ?, ? )', [
        username, hashedPassword , password , address , email , ""
    
            ]);

      connection.query(insertUserSql, (err, result) => {
        if (err) {
          return res.json({
            success: false,
            data: null,
            error: err.message,
          });
        }

        const userId = result.insertId;

        res.json({
          success: true,
          message: 'Registration successful',
          userId: userId,
        });
      });
    });
  });
};

