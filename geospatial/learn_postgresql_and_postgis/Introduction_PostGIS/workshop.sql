CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    population INTEGER
);

-- Import .csv using DBeaver: https://dbeaver.com/docs/dbeaver/Data-transfer/#importing-data-from-csv-file

SELECT PostGIS_Full_Version();