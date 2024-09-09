# # A Little Background

| Term | Definition |
| ---- | ---------- |
| Entity | Something of interest in the database user community. <br>Examples include customersparts, geographic locations <br> etc  |
| Column | An individual piece of data stored in a table |
| Row | A set of columns that together completely describe an entity or <br> some action on an entity. Also called a record. | 
| Table | A set of rows, held either in memory (nonpersistent) <br> or on permanent storage (persistent) |
| Result set | Another name for a non-persistent tabel, generally the result of <br> a SQL query |
| Primary key | One or more columns that can be used as a unique identifier for <br> each row in a table |
| Foreign key | One or more columns tha can be used together to identify a singel row in <br> another table |
| Normalisation | Process of refining a database to ensure each independent piece <br> of information is in only one place <br> (excluding foreign keys) |

## What is SQL?

The result of a SQL query is a table (also called, in this context, a result set).

SQL is divided into several distinct parts:

| Schema statements | Used to define data structures stored in the database |
| Data statements | Used to manipulate the data structures defined in the schema statements |
| Transaction statements | Used to begin, end a roll back transactions |

All database elements created via SQL statements are stored in a special set of tables called
the 'data dictionary'. This 'data about the database' is known collectively as metadata.
Data dictionaries can be queried, allowing you to discover data structures deployed in the
database at runtime.

## SQL is a non-procedural language

This means you define the desired results, but the process by which the results are generated
is left to an external agent.

The optimiser in the database engine is what decides in what manner your statement is executed.
You can influence the optimiser's decisions by specifying optimisation hints, but this is advanced.

ADO.NET allows you to integrate some SQL commands into your C# code.

## Three Main Clauses

| SELECT | one or more things |
| FROM | one or more places |
| WHERE | one or more conditions apply |

Here is an example:

```SQL
SELECT cust_id, fname
FROM individual
WHERE lname = 'Smith';
```

This query searches the `individual` table for all rows whose lname columns matches the string `Smith` and returns the cust_id and fname columns from those rows.

Along with querying the database, you will most likely be involved with populating and modifying the data in your database. Here's a simple example of how you would insert a new row into the product table:

```SQL
INSERT INTO product (product_cd, name)
VALUES ('CD', 'Certificate of Depysit')
```

Whoops, looks like you mispelled 'Deposit'. No problem. You can clean that up with an update statement:

```SQL
UPDATE product
SET name = 'Certificate of Deposit'
WHERE product_cd = 'CD';
```
