# SQL Basic

SQL has three parts:

DDL - The Data Definition Language to create and maintain databases and data tables
DML - The Data Manipulation Language - to access and maintain the data in a database
DCL - The Data Control Language to control access to data stored in a database


## DML Statements

SELECT - Retrieves rows from the database
INSERT - Adds one or more new rows to a table or a view in SQL server
UPDATE - Changes existing data in one or more columbns in a table or view
DELETE - Removes rows from a table or view
MERGE - Performs insert, update or delete operations on a target based on the results of a join with a source table

## DDL statements

USE - Changes the database context
CREATE - Creates a SQL Server database object(table, view or stored procedure)
ALTER - Changes an existing object
DROP - Removes an object from the database
TRUNCATE - Removes rows from a table and frees the space used by those rows
DELETE - Remove rows from a table but does not free the space used by those rows removed

Example:

```SQL
USE [AdventureWorks]
GO
CREATE TABLE [dbo].[Planets](
[IndvidualID] [int] NOT NULL,
[PlanetName] [varchar](50) NULL,
[PlanetType] [varchar](50) NULL,
[Radius] [varchar](50) NULL,
[TimeCreated] [datetime] NULL
) ON [PRIMARY]
GO
```