# FROM

## How to use the FROM clause

`The from clause defines the tables used by a query, along with the means of linking the tables together`

## Tables

When confronted with the term table, most people think of a set of related rows stored in a database. While this does
describe one type of table, you can use the word in a more general way by removing any notion of how the data might be
stored and concentrating on just the set of related rows. Four different types of tables meet this relaxed definition:

- Permanent tables (i.e., created using the create table statement)
- Derived tables (i.e., rows returned by a subquery and held in memory)
- Temporary tables (i.e., volatile data held in memory)
- Virtual tables (i.e., created using the create view statement)

Each of these table types may be included in a query's from clause.

## Derived (subquery-generated) tables

A subquery is a query contained within another query. Subqueries are surrounded by paratheses and can be found in 
various parts of a select statement; within the from clause, however, a subquery serves the role of generating a
derived table that is visible from all other query clauses and can interact with other tables named in the from 
clause. Here's a simple example:

```SQL
SELECT concat(cust.last_name, ', ', cust.first_name) full_name
FROM 
    (SELECT first_name, last_name, email
        FROM customer
        WHERE first_name = 'JESSIE'
    ) cust;
```

In this example, a subquery against the customer table returns three columns, and the containing query references two
of the three available columns. The subquery is referenced by the containing query via its alias, which, in this case, 
is cust. The data in cust is held in memory for the duration of the query and is then discarded. This is a 
simplistic and not particularly useful example of a subquery in a from clause.

## Temporary tables

Although the implementation differs, every relational database allows the ability to define volatile, or temporary tables.
These tables look just like permanent tables, but any data inserted into them will disappear at some point (generally 
at the end of a transaction or when your database session is closed). Here's a simple example showing how actors whose
last names start with J can be stored temporarily:

```SQL
CREATE TEMPORARY TABLE actors_j
( actor_id smallint(5),
  first_name varchar(45),
  last_name varchar(45)
);

INSERT INTO actors_j
SELECT actor_id, first_name, last_name
FROM actor
WHERE last_name LIKE 'J%' ;
```

This table will be held in memory temporarily and will disappear after your session closes.

## Views/ virtual tables

A view is a query that is stored in the data dictionary. It looks and acts like a table, but there is no data associated with a view
(this is why it is called a virtual table). When you issue a query against a view, your query is merged with the new view definition to
create a final query to be executed.

To demonstrate, here's a view definition that queries the employee table and includes four of the available columns:

```SQL
CREATE VIEW cust_vw AS
SELECT customer_id, first_name, last_name, active
FROM CUSTOMER;
```

When the view is created, no additional data is generated or stored: the server simply tucks away the select statement for future use.
Now that the view exists, you can issue queries against it, as in:

```SQL
SELECT first_name, last_name
FROM cust_vw
WHERE active = 0;
```

## Table links

The second deviation from the simple from clause definition is the mandate that if more than one table appears in the from clause,
the conditions used to link the tables must be included as well. Here's a simple example:

```SQL
SELECT customer.first_name, customer.last_name,
    time(rental.rental_date) rental_time
FROM customer
    INNER JOIN rental
    ON customer.customer_id = rental.customer_id
WHERE date(rental.rental_date) = '2005-06-14';
```

This query displays data from both the customer table (first_name, last_name) and the rental table (rental_data), so both tables are
included in the from clause. The mechanism for linking the two tables (referred to as a join) is the customer ID stored in both the
customer and rental tables. Thus, the database server is instructed to use the value of the customer_id column in the customer table
to find all the customer's rentals in the rental table. Join conditions for the two tables are found in the on subclause of the from
clause; in this case, the join condition is ON customer.customer_id = rental.customer_id. The where clause is not part of the join 
and is only included to keep the result set fairly small, since there are more than 16,000 rows in the rental table.
