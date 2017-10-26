var express = require('express');
var router = express.Router();
var adminmodel=require('../models/admin');
/* GET home page. */
var response={
    "status":"",
    "msg":""
}
router.get('/checklogin', function (req, res, next) {
    console.log(req.query);
    var data=req.query;
    adminmodel.getAdminData(data,function(err,data){
        if(data.length){
            response["msg"]="Login Successful";
            response["status"]=true;
            res.send(response);
        }
        else{
            
            response["msg"]="Invalid Login Credentials"
            response["status"]=false;
            res.send(response);
        }   
    });
});

module.exports = router;
