DROP DATABASE IF EXISTS triagil;
CREATE DATABASE triagil;
USE triagil;

CREATE TABLE IF NOT EXISTS team (
	id varchar(55) primary key,
  owner varchar(50) not null
) engine=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE IF NOT EXISTS pokemon (
	id varchar(55) primary key,
  name varchar(40) not null,
  height float not null,
  weight float not null
) engine=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE IF NOT EXISTS team_pokemon (
	id varchar(55) primary key,
	id_team varchar(55) not null,
  id_pokemon varchar(55) not null,
  FOREIGN KEY (id_team)
    REFERENCES team (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (id_pokemon)
    REFERENCES pokemon (id)
    ON UPDATE CASCADE ON DELETE CASCADE
) engine=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
