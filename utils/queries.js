module.exports={
    "validate_username_password_admin":"select * from ADMIN where username=? and password=?",
    "insert_update_userdata":"insert into USER (userid,fname,lname,gcmid,password,email,logintype,imageurl) VALUES(?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE userid=",
    "getuserspecific":"select * from USER where userid=",
    "validate_normal_user":"select * from USER"
}