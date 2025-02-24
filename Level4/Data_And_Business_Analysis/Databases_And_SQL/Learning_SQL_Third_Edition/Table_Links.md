# Table Links

The second deviation from the simple from clause definition is the mandate that if more than one table appears in the from clause,
the conditions used to link the tables must be included as well.

Here is an example:

```SQL
SELECT customer.first_name, customer.last_name,
    time(rental.rental_date) rental_time
FROM customer
    INNER JOIN rental
    ON customer.customer_id = rental.customer_id
WHERE date(rental.rental_date) = '2005-0-14';
```

This shows the rows which include a customer's first name, last name and rental time on the specified date.

## Defining table aliases

When multiple tables are joined in a single query, you need a way to identify which table you are referring to when 
you reference columns in the select, where, group by, having and order clauses. You have two choices when referencing
a table outside the from clause:

- Use the entire table name, such as employee.emp_id
- Assign each table an alias and use the alias throughout the query

Here's how the previous query looks when using table aliases

```SQL
SELECT c.first_name, c.last_name, time(r.rental_date) rental_time
FROM customer AS c
    INNER JOIN rental AS r
    ON c.customer_id = r.customer_id
WHERE date(r.rental_date) = '2005-06-14';
```

You can also use the AS keyword to make things more clear.