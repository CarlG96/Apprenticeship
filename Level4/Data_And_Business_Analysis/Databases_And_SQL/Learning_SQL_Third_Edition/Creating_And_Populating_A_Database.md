# Creating and Populating a Database

## Data Types

## Character Data

Character data can be stored as either fixed length or variable length strings; the difference is that fixed-length strings are right-padded with spaces and always consume the same number of bytes, and variable-length strings are not right-padded with spaces and don't always consume the same number of bytes. When defining a character column, you must specify the maximum size of any string to be stored in the column. For example, if you want to store strings up to 20 characters in length, you could use either of the following definitions:

```SQL
char(20) /* fixed length */
varchar(20) /* variable length */
```
The maximum length for char columns is currently 255 bytes, whereas varchar columns can be up to 65,535 bytes (For MySQL).

## Text data 

If you need to store data that might exceed the 64 KB limit for varchar columns, you will need to use one of the text types (For MySQL):

| Text type | Maximum number of bytes |
| --------- | ----------------------- |
| tinytext | 255 |
| text | 65.535 |
| mediumtext | 16,777,215 |
| longtext | 4,294,967, 295 |

## Numeric Data 

bits, tinyints, smallints, bigints, decimals, floats etc, very dependent on type of SQL database

## Temporal Data

Dates, datetimes 



