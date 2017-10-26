CREATE TABLE USER (
 userid varchar(200) NOT NULL,
 fname varchar(10) NOT NULL,
 lname varchar(10) NOT NULL,
 gcmid text NOT NULL,
 password text DEFAULT NULL,
 email varchar(32) DEFAULT NULL,
 logintype varchar(10) DEFAULT NULL,  
 imageurl text DEFAULT NULL,
 createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  PRIMARY KEY (userid) 
);

INSERT INTO USER (userid,fname,lname)
VALUES (11111,"Shantanu","Madane")
ON DUPLICATE KEY UPDATE 
  userid=VALUES(userid);