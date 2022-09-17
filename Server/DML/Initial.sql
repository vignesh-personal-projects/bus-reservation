create database busReservation;
use busReservation;
ALTER USER 'root'@'localhost'
IDENTIFIED WITH mysql_native_password BY 'admin';
FLUSH PRIVILEGES;
create table bus(bus_id int,
bus_name varchar(100),
bus_from varchar(100),
bus_to varchar(100),
bus_timing varchar(20),
bus_date date,
seat_availablity int);

insert into bus(bus_id,bus_from,bus_to,bus_date,seat_availablity,bus_name,bus_timing)
values(1,'Chennai','Bangalore',sysdate(),30,'ABC Travels','9:00 am');
insert into bus(bus_id,bus_from,bus_to,bus_date,seat_availablity,bus_name,bus_timing)
values(2,'Chennai','Hyderabad',sysdate(),30,'ABC Travels','9:00 am');
insert into bus(bus_id,bus_from,bus_to,bus_date,seat_availablity,bus_name,bus_timing)
values(3,'Chennai','Mumbai',sysdate(),30,'ABC Travels','9:00 am');

select * from bus;
select * from tickets;

create table tickets(ticket_id int,
firstname varchar(80),
lastname varchar(80),
bus_id int,
mailid varchar(50),
phone varchar(50),
seat_no int);
