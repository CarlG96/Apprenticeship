# Normalisation

Normalisation is the process of organising data in a database. It involves making the database more flexible by eliminating redundancy and inconsistent dependency. Normalisation increases data integrity.

There are a few rules for database normalisation. Each rule is called a "normal form". If the first rule is observed, the database is said to be in "first normal form." If the first three rules are observed, the database is considered to be in "third normal form." Although other levels of normalisation are possible, third normal form is considered the highest level necessary for most applications.

## First normal form

- Eliminate repeating groups in individual tables
- Create a separate table for each set of related data
- Identify each set of related data with a primary key
- Using row order to convey information violates 1NF
- Storing a repeating group of data items on a single row violates 1NF

## Second normal form

- Create separate tables for sets of values that apply to multiple records
- Relate these tables with a foreign key
- Each non-key attribute must depend on the entire primary key

## Third normal form

- Eliminate fields that don't depend on the key
- Dependency of a non-key attribute on another non-key attribute
- Every non-key attribute in a table should depend on the key, the whole key and nothing but the key

Values in a record that aren't part of that record's key don't belong in a table. In general, anytime the contents of a group of fields may apply to more than a single record in the table, consider placing those fields in a separate table

## Boyce-Codd Normal Form (slightly stronger flavour of 3NF)

- Every attribute in a table should depend on the key, the whole key and nothing but the key

## Fourth Normal form

- Multivalued dependencies in a table must be multivalued dependencies on the key

## Fifth Normal form

The table (which must be in 4NF) cannot be describable as the logical result of joining some other tables together

Is it worth using 4th and 5th normal form?

