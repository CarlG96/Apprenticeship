# SELECT

## How to use the SELECT clause

```SQL
SELECT *
FROM language;
```

Is equivalent to saying: `Show me all the columns and all the rows in the language table`.

```SQL
SELECT language_id, name, last_update
FROM language;
```

Returns all the rows of the language table but only the columns of language_id, name and last_update.

The job of the select clause, therefore, is as follows: 

`The select clause determines which of all possible columns should be included in the query's result set`

## More advanced uses of the SELECT clause

The next query demonstrates the use of a table column, a literal, an expression, and a built-in function call in a single query against 
the language table:

```SQL
SELECT language_id, 
    'COMMON' language_usage,
    language_id * 3.1415927 lang_pi_value,
    upper(name) language_name
FROM language;
```

This returns a query set with columns of language_id, a column called language_usage where for each row the value is 'COMMON', a column called lang_pi_value which represents the
language_id * pi, and a column called language_name which is the name field of from the language table uppercased. It looks like so:

+--------------------------------------------------------------+
| language_id | language_usage | lang_pi_value | language_name |
+ ------------------------------------------------------------ +
|           1 | COMMON         | 3.1415927     | ENGLISH       |
|           2 | COMMON         | 6.2831854     | ITALIAN       |
+ ------------------------------------------------------------ + etc (need to view as plain text)



