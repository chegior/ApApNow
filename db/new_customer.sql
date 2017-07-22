
INSERT INTO customer
(firstname, lastname, email, phone)
VALUES ($1,$2,$3,$4)
RETURNING id;
