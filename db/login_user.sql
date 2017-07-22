SELECT * FROM users AS loged, customer AS cust
WHERE
cust.id = loged.cust_id
AND
loged.username = $1
AND
loged.password = $2;
