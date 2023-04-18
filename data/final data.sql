DROP TABLE vaccine2
CREATE TABLE vaccine2 (
	id INT NOT NULL,
	location VARCHAR NOT NULL,
	total_vaccinations FLOAT NOT NULL ,
	total_vaccinations_per_hundred FLOAT NOT NULL,
	total_distributed FLOAT NOT NULL,
	distributed_per_hundred FLOAT NOT NULL,
	people_vaccinated FLOAT NOT NULL,
	people_vaccinated_per_hundred FLOAT NOT NULL,
	people_fully_vaccinated FLOAT NOT NULL,
	people_fully_vaccinated_per_hundred FLOAT NOT NULL,
	daily_vaccinations FLOAT NOT NULL,
	daily_vaccinations_per_million FLOAT NOT NULL,
	total_boosters FLOAT NOT NULL,
	total_boosters_per_hundred FLOAT NOT NULL
 
);
SELECT *
 FROM vaccine2
