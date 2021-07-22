---
layout: post
title: "Define an Auto Increment Primary Key in PostgreSQL"
image: "images/content/angular-by-example-httpclient-get.png"
excerpt: "There are various ways for defining auto incremented primary keys in PostgreSQL; let's see some of them." 
date: 2020-06-16
tags : [postgresql]
--- 

There are various ways for defining auto incremented primary keys in PostgreSQL; let's see some of them.

## Using the Serial Data Type

By far the simplest and most common technique for adding a primary key in Postgres is by using the  `SERIAL`  or  `BIGSERIAL`  data types when  `CREATING`  a new table. As indicated in the  [official documentation](https://www.postgresql.org/docs/8.1/datatype.html#DATATYPE-SERIAL),  `SERIAL`  is not a true data type, but is simply shorthand notation that tells Postgres to create a auto incremented, unique identifier for the specified column.

Below we’ll create our simple  `books`  table with an appropriate  `SERIAL`  data type for the primary key.

```sql
CREATE TABLE books (
  id              SERIAL PRIMARY KEY,
  title           VARCHAR(100) NOT NULL,
  primary_author  VARCHAR(100) NULL
);

```

By simply setting our  `id`  column as  `SERIAL`  with  `PRIMARY KEY`  attached, Postgres will handle all the complicated behind-the-scenes work and automatically increment our  `id`  column with a unique, primary key value for every  `INSERT`.

## Using a Custom Sequence

In some rare cases, the standard incremental nature built into the  `SERIAL`  and  `BIGSERIAL`  data types may not suit your needs. In these cases, you can perform the same auto incremented primary key functionality for your column by creating a custom  [`SEQUENCE`](https://www.postgresql.org/docs/8.1/sql-createsequence.html), similar to the method used in older version of Oracle.

Perhaps we’re particularly fond of even numbers but also have a strong distaste for anything smaller than 100, so we only want our primary key to be incremented by two starting at 100 for every insert. This can be accomplished with a custom  `SEQUENCE`  like so:

```sql
CREATE SEQUENCE books_sequence
  start 2
  increment 2;

```

Now when we  `INSERT`  a new record into our  `books`  table, we need to evaluate the the next value of our sequence with  `nextval('books_sequence')`  and use that as our  `id`.

```sql
INSERT INTO books
  (id, title, primary_author)
VALUES
  (nextval('books_sequence'), 'The Hobbit', 'Tolkien');
```

`SEQUENCES`  can be spiced up even more if desired, with options like  `minvalue`  and  `maxvalue`  to of course indicate extreme values, and even  `CYCLE`, which allows the sequence to “loop around” once it reaches the  `maxvalue`, returning back to the  `start`  value and beginning the climb all over again. Far more information can be found in the  [official documentation](https://www.postgresql.org/docs/8.1/sql-createsequence.html).