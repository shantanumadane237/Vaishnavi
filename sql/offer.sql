id,title,description,startdate,enddate,createdAt

CREATE TABLE OFFERS (
 offerid varchar(200) NOT NULL,
 title varchar(200) NOT NULL,
 description text NOT NULL,
 startdate bigint(5)  NOT NULL,
 enddate bigint(5) NOT NULL,
 createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  PRIMARY KEY (offerid) 
);