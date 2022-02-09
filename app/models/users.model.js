const sql = require("./db.js");

// constructor
const Users = function(users) {
  this.username = users.username;
  this.password = users.password;
  
};

Users.create = (newUsers, result) => {
  sql.query("INSERT INTO users SET ?", newUsers, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Users: ", { id: res.insertId, ...newUsers });
    result(null, { id: res.insertId, ...newUsers });
  });
};


module.exports = Users;
