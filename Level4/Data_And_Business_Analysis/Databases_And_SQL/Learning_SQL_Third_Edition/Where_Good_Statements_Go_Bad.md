# Where Good Statements Go Bad

Here are some things to watch out for when writing SQL statements that insert, update or delete data.

## Nonunique Primary Key

Because the creation of the person table elsewhere included the creation of primary key constraints, MySQL will make sure that duplicate 
key values are not inserted into the tables. 

## Nonexistant foreign key

The table definition for the favourite_food table includes the creation of a foreign key constraint on the person_id column. This means you must create data in the parent (person) table before using a foreign key from the person table in the child (favourite_food) table.

## Column Value Violation

The eye_colour column in the person table is restricted to the values 'BR' for brown, 'BL' for blue and 'GR' for green. If you mistakenly attempt to set the value of the column to any other value, you will receive an error message.

## Invalid Date Conversions

In general, it is always a good idea to explicitly specify the format string rather than relying on the default format. Here's another version of the statement that uses the str_to_date function to specify which format string to use:

```SQL
UPDATE person
SET birth_date = str_to_date('DEC-21-1980', '%b-%d-%Y')
WHERE person_id = 1;


```