INSERT INTO "public"."user"("cust_id", "user", "password")
VALUES(
    "(SELECT id FROM customer WHERE email = "+$1+")",
    $2,
    $3
);
