# Populating and Modifying Tables

## Inserting Data

There are three main components to an insert statement:

- The name of the table into which to add the data
- The names of the columns in the table to be populated
- The values with which to populate the columns

You are not required to provide data for every column in the table (unless all the columns are defined as not null).

## Changing the schema of person so that the primary key is generated better

Because databases could theoretically be accessed at the same times by different people, problems might arise if two of the same primary key are generated. Here is an update to the person table to make it better for this:

```SQL
ALTER TABLE person MODIFY person_id SMALLINT UNSIGNED AUTO_INCREMENT;
```

## The insert statement 

The following statement creates a row in the person database:

```SQL
INSERT INTO person
    (person_id, fname, lname, eye_colour, birth_date)
VALUES (null, 'William', 'Turner', 'BR', '1972-05-27');
```

## Updating Data

When the data for William Turner was initially added to the table, data for the various address columns was not included as part of the insert statement. The next statement shows how these columns can be populated at a later time via an update statement:

```SQL
UPDATE person
SET street = '1225 Tremont St.',
city = 'Boston',
state = 'MA',
country = 'USA',
postal_code = '02138'
WHERE person_id = 1;
```

## Deleting Data

If you want to delete data, you can do it like so:

```SQL
DELETE FROM person
WHERE person_id = 2;
```