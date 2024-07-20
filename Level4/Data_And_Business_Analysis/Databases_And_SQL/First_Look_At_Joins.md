# Joins

Joins allow you to combine data from two different tables.

## Cross joins

Cross joins retrieve the Cartesian Product of two different tables. 

Here are two tables we want to cross join:

![Two tables](./images/tables_for_cross_joins.png)

And here is what the start of the cartesian product of that cross join looks like:

![Cross joined table](./images/cross_joined_table.png)

You can see each of the rows from the Member table has been multiplied by the rows of the Type table

This is done using this command:

```SQL
SELECT *
From Member m CROSS JOIN Type t;
```

However, alot of this information in the cross-joined table is meaningless, so we move on to Inner Joins

## Inner Joins

If you wanted only the useful information, like that highlighted:

![Inner Join](./images/inner-join.png)

you would use the following SQL query:

```SQL
SELECT *
FROM Member m INNER JOIN Type t ON m.MemberType = t.Type;
```
Note: In order to compare two columns (like the above MemberType and Type), you must make sure they are join compatible.
This usually means they are represented by the same data type, but also means logically you would need to check they 
might contain the same values. You also may run into problems if one field is CHAR(10) and another is CHAR(15) etc.





