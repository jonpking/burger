create database burgers_db;
use burgers_db;
create table burgers(
    id integer not null primary key auto_increment,
    burger_name varchar(50),
    devoured boolean
);