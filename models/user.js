const connection = require('../utils/connection.js');
connection.init();
module.exports = {

    setUserData: (model, cb) => {
        connection.acquire(function (err, con) {

            var query = "insert into USER (userid,fname,lname,gcmid,password,email,logintype,imageurl) VALUES(?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE userid='" + model.userid+"'";

            con.query(query, [model.userid, model.fname, model.lname, model.gcmid, model.password, model.email, model.logintype, model.imageurl],
                function (err, result) {
                    con.release();
                    cb(err, result);
                });
        });

    },
    getUserSpecificData: (model, cb) => {
        connection.acquire(function (err, con) {
            var query = "select * from USER where userid='" + model.userid+"'   ";
            con.query(query, [],
                function (err, result) {
                    con.release();
                    cb(err, result);
                });
        });

    },
    validateUser: (model, cb) => {
        connection.acquire(function (err, con) {
            var query = "select * from USER where email='" + model.email + "' AND password='" + model.password+"'";
            con.query(query, [],
                function (err, result) {
                    con.release();
                    cb(err, result);
                });
        });

    },
    getUserPassword:(model,cb) =>{
        console.log("INSIDE getUserPassword")
        connection.acquire(function (err, con) {
            var query = "select password,userid,email from USER where email='" + model.email + "'";
            con.query(query, [],
                function (err, result) {
                    con.release();
                    cb(err, result);
                });
        });
    }

}