var express = require('express');
var router = express.Router();
var usermodel = require('../models/user');

/* INSERT USER DATA*/
router.post('/create', function (req, res, next) {
  var userdata = req.body;
  usermodel.setUserData(userdata, function (err, data) {
    console.log(err);
    if (data.affectedRows) {
      usermodel.getUserSpecificData(userdata, function (err, result) {
        console.log(result);
        var response = {};
        response["status"] = true;
        response["createResult"] = result[0];
        response["msg"] = "User Stored Successfully";
        res.send(response);
      });

    }


  });
});

/* VALIDATE NORMAL USER */
router.get('/login', function (req, res, next) {
  var userdata = req.query;
  usermodel.validateUser(userdata, function (err, result) {
    if (result.length) {
      var response = {};
      response["status"] = true;
      response["loginResult"] = result[0];
      response["msg"] = "User Login Successful";
      res.send(response);
    }
    else {
      var response = {};
      response["status"] = false;
      response["msg"] = "Invalid Login Credentials/User does not exist";
      res.send(response);
    }

  });
});

/* FORGOT PASS NORMAL USER */
router.get('/forgotpassword', function (req, res, next) {
  var userdata = req.query;
  usermodel.getUserPassword(userdata, function (err, result) {
    var response = {};
    if (result.length) {
      response["status"] = true;
      response["forgotPasswordResult"] = result[0];
      response["msg"] = "User Details Found";
      res.send(response);
    }
    else {
      var response = {};
      response["status"] = false;
      response["msg"] = "Email does not exist";
      res.send(response);
    }
  });
});

module.exports = router;
