# Table Creation

Step 1: Design

A good wat to start designing a table is to do a bit of brainstorming to see what kind of information would be helpful to include. Here's an example in terms of describing a person:

- Name
- Eye colour
- Birth date
- Address
- Favourite foods

And here's an example of what the schema for columns and data types:

| Column | Type | Allowable Values |
| ------ | ---- | ---------------- |
| name | varchar(40) | - |
| eye_colour | char(2) | BL,BR,GR |
| birth_date | date | - |
| address | varchar(100) | - |
| favourite_foods | varchar(200) | - |

Step 2: Refinement

Normalisation is the process of ensuring there are no duplicate (other than foreign keys) or compound columns in your database design. In looking at the columns in the person table a second time, the following issues arise:

- The name column is actually a compound object consisting of a first name and a last name
- Since multiple people can have the same name, eye colour, birth date, and so forth, there are no columns in the person table that guarantee uniqueness
- The address column is also a compound object consisting of street, city, state/province, country and postal code.
- The favourite_foods column is a list containing zero, one or more independent items. It would be best to create a separate table for this data that includes a foreign key to the person table so that you know which person a particular food may be attributed.

After taking these issues into consideration, here is a normalised version of the person table:

<strong>person Table</strong>

| Column | Type | Allowable values |
| ------ | ---- | ---------------- |
| person_id | smallint (unsigned) | - |
| first_name | varchar(20) | - |
| last_name | varchar(20) | - |
| eye_colour | char(2) | BR, BL, GR |
| birth_date | date | - |
| street | varchar(30) | - |
| city | varchar(20) | - |
| state | varchar(20) | - |
| country | varchar(20) | - |
| postal_code | varchar(20) | - |

Now that the person has a primary key to guarantee uniqueness, the next step is to build a favourite_food table that includes a foreign key to the person table:

<strong>favourite_food Table</strong>

| Column | Type |
| ------ | ---- |
| person_id | smallint (unsigned) |
| food | varchar(20) |

Step 3: Building SQL schema statements

Here is the statement to create the person table:

``` SQL
CREATE TABLE person 
(
    person_id SMALLINT UNSIGNED,
    fname VARCHAR(20),
    lname VARCHAR(20),
    eye_colour CHAR(2),
    birth_date DATE,
    street VARCHAR(30),
    city VARCHAR(20),
    state VARCHAR(20),
    country VARCHAR(20),
    postal_code VARCHAR(20),
    CONSTRAINT pk_person PRIMARY KEY (person_id)
);
```

The `CONSTRAINT` is for the primary key in this instance, although there are other types of constraint.

In MySQL you could add a constraint on the `eye_colour` field by swapping it for this:

```SQL
eye_colour ENUM('BR', 'BL', 'GR')
```

To find out whether a particular table has been created, you can use the query:

```SQL
desc <table name>;
```
This will show you things about the table, including the types of the fields, whether they are nullable and what their default values are etc

## What is Null?

In some cases, it is not possible or applicable to provide a value for a particular column in your table. For example, when adding data about a new 
customer order, the ship_date column cannot yet be determined. In this case, the column is said to be null, which indicates the absence of a value.
Null is used in various cases where a value cannot be supplied, such as:

- Not applicable
- Unknown
- Empty set

When designing a table, you may specify which columns are allowed to be null (the default) and which columns are not allowed to be null (designated
by adding the key words not null after the type definition).

## Creating the favourite food table

After creating the person table, we want to create the favourite_food table. This is how you would do it:

```SQL
CREATE TABLE favourite_food
(
    person_id SMALLINT UNSIGNED,
    food VARCHAR(20),
    CONSTRAINT pk_favourite_food PRIMARY KEY (person_id, food),
    CONSTRAINT fk_fav_food_person_id FOREIGN KEY (person_id)
    REFERENCES person (person_id)
);
```

- Since a person can have more than one favourite food (which is the reason this table was created in the first place), it takes more than just the person_id
column to guarantee uniqueness in the table. This table, therefore, has a two-column primary key: person_id and food.
- The favourite_food table contains another type of constraint which is called a foreign key constraint. This constrains the values of the person_id column in the
favourite_food table to include only values found in the person table. With this constraint in place, I will not be able to add a row to the favourite_food table
indicating that person_id 27 likes pizza if there isn't already a row in the person table having a person_id of 27.

