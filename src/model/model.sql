CREATE TABLE airports(
  airport_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  airport_name varchar(255) NOT NULL,
  airport_location varchar(255) NOT NULL
);

CREATE TABLE reyses(
  reyse_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  reyse_to varchar(255) NOT NULL,
  airport_id uuid REFERENCES airports(airport_id)
);

INSERT INTO reyses(reyse_to, airport_id)VALUES('Islom Karimov Airport', 'd64b800d-d3a6-4e01-8cd1-4d576ac7118e');
INSERT INTO reyses(reyse_to, airport_id)VALUES('Surkhondarya Airport', 'd64b800d-d3a6-4e01-8cd1-4d576ac7118e');

INSERT INTO airports(airport_name, airport_location) VALUES('Tashkent Airways', '13 Kumarik ko`chasi, Tashkent 100167');