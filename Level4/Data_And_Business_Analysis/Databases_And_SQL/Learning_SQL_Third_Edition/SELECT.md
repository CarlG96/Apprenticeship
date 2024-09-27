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

## Column Aliases

In the above query for the advanced uses, lanuage_uasge, lang_pi_value and language_name are column aliases. It is a good idea to use column aliases if the
current columns in use in another table are ambiguously named or the columns you are generating are from expressions or built in function calls.

Optionally, you can use the AS keyword like so for additional readability for column aliases like so:

```SQL
SELECT language_id,
    'COMMON' AS language_usage,
    language_id * 3.14 AS lang_pi_value,
    upper(name) AS language_name
FROM language;
```

## Removing duplicates

In some cases, a query might return duplicate rows of data. For example, if you were to retrieve the IDs of all actors who appeared in a film,
you would see the following:

```SQL
SELECT actor_id FROM film_actor ORDER BY actor_id;

result: 1,1,1,1,200,200,200
```

This is because some actors appear in more than one film. What you probably want is the distinct set of actors, instead of seeing the actor IDs
repeated for each film that they appeared in. To do this, you can add the DISTINCT keyword after SELECT like so:

```SQL
SELECT DISTINCT actor_id FROM file_actor ORDER BY actor_id;
```
