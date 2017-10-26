const connection = require('../utils/connection.js');
connection.init();
module.exports = {

    getAdminData:(model, cb) => {
        connection.acquire(function (err, con) {
            con.query("select * from ADMIN where username=? and password=?", [model.username,model.password],
                function (err, result) {
                    con.release();
                    cb(err, result);
                });
        });

    }

}