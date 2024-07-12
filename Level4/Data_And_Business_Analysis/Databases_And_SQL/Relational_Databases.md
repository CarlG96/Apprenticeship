# Relational Databases

A relational database is a set of tables

## Attributes

An attribute consists of a name and a domain or type. An example of names might be FamilyName, Handicap etc. A domain is a set of allowed values, for example a column for storing dates might only allow for Date values or an Age column might only allow non-negative integers.

## Primary Keys

One of the most important features of a relational database is that each of its rows should be unique. No two rows in a table should have identical values for every attribute. A primary key is an attribute that allows for this. Whereas all the other data in a row might be the same, a primary key should differentiate between the two records. Primary keys are usually ids, as this is the easiest way to differentiate. A primary key in a table should always be unique and not empty (null).

## Basic SQL to create a table

```SQL
CREATE TABLE Member (
    MemberId INT PRIMARY KEY,
    LastName CHAR(20),
    FirstName CHAR(20),
    Phone CHAR(6),
    Handicap INT,
    JoinDate DATETIME,
    Gender CHAR(1));
```

## Basic SQL to insert data into a database

```SQL
INSERT INTO Member
VALUES (118, 'McKenzie', 'Melissa', '963270', 30, '05/10/1999', 'F')
```

## Basic SQL to partial insert data into a database

```SQL
INSERT INTO Member (MemberID, LastName)
VALUES (258, 'Olsen')
```

## Basic SQL to update data

```SQL
UPDATE Member
SET Phone = '875077'
WHERE MemberID = 118
```