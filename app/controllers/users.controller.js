const Users = require("../models/users.model.js");

// Create and Save a new Users
exports.create = (req, res) => {
    
    console.log("aaaaaaaaaaa")
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Tutorial
    const users = new Users({
      username: req.body.username,
      password: req.body.password,
  
    });
  
    // Save Users in the database
    Users.create(users, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Users."
        });
      else res.send(data);
    });
  };
  