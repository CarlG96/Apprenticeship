# Query Primer

In order to connect to a database, you need the server to verify your username and password and then issue you a connection. Once the connection is issued and you 
execute a query, three things will happen:

1) The server will check you have permission to execute that statement
2) The server will check you have access to the desired data
3) The statement syntax is correct

If you pass those three tests, the query is handed over to the query optimiser, which determines the most efficient way to execute your query.

Once the server has finished executing your query, the result set is returned.

## Query Clauses

Here are the different query clauses and their purposes:

| Clause Name | Purpose |
| ----------- | ------- |
| select | Determines which columns to include in the query's result set |
| from | Identifies the tables from which to retrieve data and how the tables should be joined |
| where | Filters out unwanted data |
| group by | Used to group rows together by common column values |
| having | Filters out unwanted groups |
| order by | Sorts the rows of the final result set by one or more columns |