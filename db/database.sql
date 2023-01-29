CREATE DATABASE IF NOT EXISTS company;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(ID)
);

DESCRIBE employee;

INSERT INTO employee VALUES 
(1, 'Joe', 1000),
(2, 'Ana', 2000),
(3, 'Jem', 2500),
(4, 'Max', 1400);

select * from employee;