
CREATE TABLE ADMIN(username text NOT NULL,password text NOT NULL,createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP);

INSERT INTO ADMIN(username,password) VALUES("root","root");