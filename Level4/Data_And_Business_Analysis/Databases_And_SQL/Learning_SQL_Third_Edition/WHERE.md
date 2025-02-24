# WHERE

## The where clause

In some cases, you may want to retrieve all rows from a table, especially for small tables. Most of the time,
however, you will not want to retrieve every row from a table but will want a way to filter out those rows that are
not of interest. This is a job for the where clause:

`The where clause is the mechanism for filtering out unwanted rows from your result set`

For example, perhaps you are interested in renting a film but you are only interested in movies rated G that can
be kept for at least a week. The following query employs a where clause to retrieve only the films meeting this
criteria:

```SQL
SELECT title
FROM film
WHERE rating = 'G' AND rental_duration >= 7;
```

Individual filter conditions are separated using operators such as and, or, and not.

For AND, all conditions must evaluate to true to be included in the result set.
For OR, only one of the conditions needs to evaluate to true to be included in the result set.

If you need to include the use of both then use parentheses to group conditions, like so:

```SQL
SELECT title, rating, rental_duration
FROM film
WHERE (rating = 'G' AND rental_duration >= 7)
    OR (rating = 'PG-13' AND rental_duration = 4);
```