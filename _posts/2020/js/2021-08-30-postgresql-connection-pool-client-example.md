---
layout: bpost
title: "Connecting to PostgreSQL with Node.js: Connection Pool vs Client" 
author: ahmed
tags: [posgresql]
excerpt: ""
---

If you plan on writing more advanced applications in Node.js, you may find the need to store information persistently. Depending on the needs of the application, you may opt for storing data in a relational database like Postgres. In this article, I'm going to cover how you can use Node.js to connect to and execute queries against a Postgres database.

## PostgreSQL

PostgreSQL is a proven 30+ year old relational database. It is one of the most popular, advanced and feature-packed relational databases out in the wild and runs on most well-known operating systems.

## node-postgres

node-postgres is a pure JavaScript library that allows you to interact with a PostgreSQL database. It supports modern features such as aync / await and is well maintained. There are very little abstractions between node-postgres and the actual calls being made to the database, and this is by design.

node-postgres can be easily installed into your project by installing the  `pg`  package:

```bash
npm install pg
```

## Setting up PostgreSQL

First, you'll need a Postgres database to connect to as node-postgres obviously won't work without one. There's more than one way to set one up, such as installing from a package manager, but if you have Docker, it's very simple. Here's how I set up the latest version of Postgres on my machine:

```bash
$ docker run \
      --name postgres \
      -e POSTGRES_PASSWORD=yourpassword \
      -p 5432:5432 \
      -d postgres
```

I was able to verify everything was up and running by shelling in with:

```bash
$ docker exec -ti -u postgres postgres psql
```

Then running the following, creating a database for us to connect to later:

```sql
$ CREATE DATABASE nodedemo;
```

At this point you should have a fully functional database server running on your system!

## Connecting to Postgres from Node

There are a couple of different ways to connect to your database. You can use a connection pool or just instantiate a client. Here, we create both using credentials inside of the code itself. You can also configure connections with  [environment variables](https://www.postgresql.org/docs/9.1/static/libpq-envars.html)  instead!

This is an example  `index.js`  file that I put into a project I generated with  `npm init`  and installed node-postgres into:

```javascript
const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "nodedemo",
  password: "yourpassword",
  port: 5432,
};

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;
}

// Connect with a client.

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();

  return now;
}

// Use a self-calling function so we can use async / await.

(async () => {
  const poolResult = await poolDemo();
  console.log("Time with pool: " + poolResult.rows[0]["now"]);

  const clientResult = await clientDemo();
  console.log("Time with client: " + clientResult.rows[0]["now"]);
})();
```

The results object has more information than just the returned rows, such as row count, the command, and fields returned in the response. You can find out more about the results object in  [the documentation](https://node-postgres.com/api/result).

The pool is recommended for any application that has to run for an extended period of time. Each time a client is created, it has to do a handshake with the PostgreSQL server and that can take some time. A connection pool will recycle a pre-determined amount of client objects so that the handshake doesn't have to be done as often.

## Let's Write some CRUD

I'm going to show some example of basic CRUD (Create-Read-Update-Delete) operations. Since node-postgres is a very light abstraction, it's not much different than writing the queries yourself against the REPL (Read-Eval-Print Loop).

Let's start with a basic schema. You can execute this SQL using  `psql`:

```sql
CREATE TABLE people (
    id BIGSERIAL,
    fullname TEXT,
    gender TEXT,
    phone TEXT,
    age INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
);
```

Here are the functions that implement CRUD:

```javascript
async function registerPerson(person) {
  const text = `
    INSERT INTO people (fullname, gender, phone, age)
    VALUES ($1, $2, $3, $4)
    RETURNING id
  `;
  const values = [person.fullname, person.gender, person.phone, person.age];
  return pool.query(text, values);
}

async function getPerson(personId) {
  const text = `SELECT * FROM people WHERE id = $1`;
  const values = [personId];
  return pool.query(text, values);
}

async function updatePersonName(personId, fullname) {
  const text = `UPDATE people SET fullname = $2 WHERE id = $1`;
  const values = [personId, fullname];
  return pool.query(text, values);
}

async function removePerson(personId) {
  const text = `DELETE FROM people WHERE id = $1`;
  const values = [personId];
  return pool.query(text, values);
}
```

If you know SQL, these functions will be self-explanatory. Note here that parameters are passed via prepared queries and  _we do not_  concatenate SQL text  _ever_. We do this to avoid SQL injection attacks, where a specially crafted parameter is created to execute arbitrary SQL against your server.

Here is our new init code that makes calls to the aforementioned functions:

```javascript
(async () => {
  // Register a new user and get an id, which comes from the RETURNING clause.
  const registerResult = await registerPerson({
    fullname: "Jane Doe",
    gender: "F",
    phone: "5555555555",
    age: 29,
  });
  const personId = registerResult.rows[0]["id"];
  console.log("Registered a person with id: " + personId);

  // Obtain the full person object from the database.
  const getPersonResult = await getPerson(personId);
  console.log(
    "Result of SELECT query for person '" +
      personId +
      "': " +
      JSON.stringify(getPersonResult.rows[0], null, "  ")
  );

  // Update the person's full name and query for them again to verify.
  await updatePersonName(personId, "Jane Johnson");
  const getChangedPersonResult = await getPerson(personId);
  console.log(
    "Result of SELECT query for person after name change '" +
      personId +
      "': " +
      JSON.stringify(getChangedPersonResult.rows[0], null, "  ")
  );

  // Clean up the database by removing the person record.
  await removePerson(personId);

  await pool.end();
})();
```

This is only scratching the surface. Many more advanced features such as  [transactions](https://node-postgres.com/features/transactions)  are also supported as well!

## What about ORMs?

ORM (Object-Relational-Mapper) allows you to write queries using an object-oriented paradigm. This can be useful if you need to generate queries dynamically in a safe way for example. Some examples of ORMs include, but are not limited to: TypeORM, Sequelize, RxDB and Objection.js.

This article is specific to node-postgres and we'll cover ORMs in depth in a future article.

## Conclusion

Interfacing with relational databases is a breeze with Node.js. The libraries in this space make it easy to utilize async functionality to ensure that your application is running optimally.