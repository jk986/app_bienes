CREATE DATABASE bienes_uno_db;

USE bienes_uno_db;

CREATE TABLE propiedad(
    
    id_p INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(45) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    imagen VARCHAR(200) NOT NULL,
    descrip VARCHAR(255) NOT NULL,
    habitaciones INT NOT NULL,
    wc INT NOT NULL,
    parking INT NOT NULL,
    creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE propiedad;

