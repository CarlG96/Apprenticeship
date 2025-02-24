# OLAP vs OLTP

Online Analytical Processing

Online Transactional Processing

OLAP primary objective is analysis of data

OLTP primary objective is the processing of data (ie transactions), usually a normal database

Many organisations will use OLTP databases to provide data for OLAP systems

## Data Warehouse

Used for OLAP, but also a relational database, data is sent from an OLTP database via ETL process (Extract, Transform and Load) into the Data Warehouse, rigid schema

## Data Lake

Designed to capture raw data (structured, semi-structured, unstructured)
Made for large amounts of data
Used for ML and AI in its current state or for analytics with processing
Can organise and put into databases or data warehouses

