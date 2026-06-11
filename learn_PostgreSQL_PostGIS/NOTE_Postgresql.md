# Postgres Cheat Sheet

This is a collection of the most common commands I run while administering Postgres databases. The variables shown between the open and closed tags, "<" and ">", should be replaced with a name you choose. Postgres has multiple shortcut functions, starting with a forward slash, "\". Any SQL command that is not a shortcut, must end with a semicolon, ";". You can use the keyboard UP and DOWN keys to scroll the history of previous commands you've run.

## SQL

- DDL: Data Definition Language
- DML: Data Manipulation Language

## Install in Docker for macOS

```bash
docker pull postgres
docker run --platform linux/arm64 postgres
docker run --name mypostgres -p 5433:5433 -e POSTGRES_USER=mypostgres -e POSTGRES_PASSWORD=mypostgres -d postgres

docker run -it --link mypostgres:postgres --rm postgres \
    sh -c 'exec psql -h "$POSTGRES_PORT_5432_TCP_ADDR" -p "$POSTGRES_PORT_5432_TCP_PORT" -U postgres'
```

docker volume create my-postgis-volume

```bash
docker pull mdillon/postgis
docker run --platform linux/arm64 mdillon/postgis
docker run --name mypostgis -p 5432:5432 -e POSTGRES_USER=mypostgis -e POSTGRES_PASSWORD=mypostgis -d mdillon/postgis

docker run -it --link mypostgis:postgres --rm postgres \
    sh -c 'exec psql -h "$POSTGRES_PORT_5432_TCP_ADDR" -p "$POSTGRES_PORT_5432_TCP_PORT" -U mypostgis'
```

### Install Docker on macOS

- [Running PostGIS with Docker on Windows, Mac & Linux](https://video.osgeo.org/w/9cZiX3fMCtpPwhZgRw3oqa)

### Recon database

Here’s the recon section condensed into a markdown table:

| Task | Command | Type | Notes |
|------|---------|------|-------|
| Show server version | `SHOW SERVER_VERSION;` | SQL | Returns server version setting (similar to `SELECT version();` for full string). |
| Show connection info | `\conninfo` | psql meta | Current host, port, user, db, SSL. |
| Show all config parameters | `SHOW ALL;` | SQL | Full list of GUC settings. Filter with `WHERE name LIKE 'log_%';` if needed. |
| List roles (users) | `SELECT rolname FROM pg_roles;` | SQL | For details: `\du+` in psql. |
| Show current user | `SELECT current_user;` | SQL | Role after any `SET ROLE`. |
| List roles & attributes | `\du` | psql meta | Shows privileges, role flags (superuser, login, etc.). |
| List databases | `\l` | psql meta | Same as `\list`; includes owner, encoding, collation. |
| Show current database | `SELECT current_database();` | SQL | Database name for current session. |
| List tables (search_path schemas) | `\dt` | psql meta | Add schema: `\dt public.*` or all: `\dt *.*`. |
| List functions (schema) | `\df <schema>` | psql meta | Use `\df+` for more details; omit schema to list all in path. |
| Connect to database | `\c <database_name>` | psql meta | Can also specify user: `\c db user`. |
| Create database | `CREATE DATABASE <database_name> WITH OWNER <username>;` | SQL | Add options: `ENCODING 'UTF8' TEMPLATE template0`. |

## Data Types

| Category        | Name                      | SQL Symbol                         | Aliases                                   | Description                                | Example                                  |
|----------------|---------------------------|-------------------------------------|-------------------------------------------|--------------------------------------------|-------------------------------------------|
| **Numeric**     | smallint                  | `smallint`                          | `int2`                                     | 2‑byte signed integer                       | `-32768` to `32768`                    |
|                | integer                   | `integer`                           | `int`, `int4`                              | 4‑byte signed integer                       | `-2,147,483,648` to `2,147,483,647`     |
|                | bigint                    | `bigint`                            | `int8`                                     | 8‑byte signed integer                       | `9223372036854775807`                     |
|                | decimal / numeric         | `decimal(p,s)` / `numeric(p,s)`     | —                                         | Exact numeric with precision/scale         | `numeric(10,2)`                           |
|                | real                      | `real`                              | `float4`                                   | 4‑byte single‑precision float              | `3.14::real`                              |
|                | double precision          | `double precision`                 | `float8`                                   | 8‑byte double‑precision float               | `2.718281828459045`                       |
|                | smallserial               | `smallserial`                      | `serial2`                                  | 2‑byte auto‑incrementing integer           | `smallserial`                             |
|                | serial                    | `serial`                            | `serial4`                                  | 4‑byte auto‑incrementing integer           | `serial` PK                               |
|                | bigserial                 | `bigserial`                         | `serial8`                                  | 8‑byte auto‑incrementing integer           | `bigserial`                               |
| **Monetary**    | money                     | `money`                             | —                                         | Fixed‑point currency value                 | `'$1234.56'::money`                       |
| **Character**   | character(n)              | `character(n)`                      | `char(n)`                                  | Fixed‑length blank‑padded string           | `char(5) 'foo  '`                         |
|                | character varying(n)      | `character varying(n)`              | `varchar(n)`                               | Variable‑length string with limit          | `varchar(255)`                            |
|                | text                      | `text`                              | —                                         | Unlimited string                           | `'hello world'::text`                     |
| **Binary**      | bytea                     | `bytea`                             | —                                         | Binary data (“byte array”)                | `'\xDEADBEEF'::bytea`                     |
| **Date/Time**   | date                      | `date`                              | —                                         | Calendar date                              | `DATE '2025-06-12'`                       |
|                | time [without tz]         | `time [ (p) ]`                      | —                                         | Time of day (no timezone)                 | `TIME '13:45:00'`                         |
|                | time with time zone       | `time (p) with time zone`           | `timetz`                                   | Time + timezone                            | `TIME '13:45:00+02'`                      |
|                | timestamp [without tz]    | `timestamp [ (p) ]`                 | —                                         | Date + time (no timezone)                 | `TIMESTAMP '2025-06-12 13:45:00'`         |
|                | timestamp with time zone  | `timestamp (p) with time zone`      | `timestamptz`                              | Date + time + timezone                     | `TIMESTAMPTZ '2025-06-12 13:45:00+02'`    |
|                | interval                  | `interval`                          | —                                         | Time span                                  | `'1 day 02:30'::interval`                 |
| **Boolean**     | boolean                   | `boolean`                           | `bool`                                     | TRUE/FALSE/NULL                             | `TRUE`, `FALSE`                           |
| **Enumerated**  | enum                      | *Custom Type*                       | —                                         | User‑defined ordered labels                | `CREATE TYPE mood AS ENUM ('sad','happy')` |
| **Geometric**   | point                     | `point`                             | —                                         | 2D point (x,y)                             | `'(1,2)'::point`                          |
|                | line                      | `line`                              | —                                         | Infinite line                              | `'(0,0),(1,1)'::line`                     |
|                | lseg                      | `lseg`                              | —                                         | Line segment                               | `'[(0,0),(1,1)]'::lseg`                   |
|                | box                       | `box`                               | —                                         | Rectangular box                            | `'( (0,0),(1,1) )'::box`                  |
|                | path                      | `path`                              | —                                         | Open or closed path                        | `'( (0,0),(1,1),(1,0) )'::path`           |
|                | polygon                   | `polygon`                           | —                                         | Closed polygon                             | `'( (0,0),(1,0),(1,1),(0,1) )'::polygon` |
|                | circle                    | `circle`                            | —                                         | Center + radius                            | `'<(0,0),1>'::circle`                     |
| **Network**     | cidr                      | `cidr`                              | —                                         | IPv4/IPv6 network                          | `'192.168.1.0/24'::cidr`                  |
|                | inet                      | `inet`                              | —                                         | IPv4/IPv6 address                          | `'192.168.1.5'::inet`                     |
|                | macaddr                   | `macaddr`                           | —                                         | MAC address                                | `'08:00:2b:01:02:03'::macaddr`            |
|                | macaddr8                  | `macaddr8`                          | —                                         | 8‑byte MAC address                         | `'08:00:2b:01:02:03:04:05'::macaddr8`     |
| **Bit String**  | bit(n)                    | `bit(n)`                            | —                                         | Fixed‑length bit string                    | `B'1010'::bit(4)`                         |
|                | varbit                    | `bit varying(n)`                    | —                                         | Variable‑length bit string                 | `B'101010'::varbit`                       |
| **Text Search** | tsvector                  | `tsvector`                          | —                                         | Lexeme array for full-text search         | `to_tsvector('english','text')`          |
|                | tsquery                   | `tsquery`                           | —                                         | Text search query                          | `'cat & dog'::tsquery`                   |
| **UUID**        | uuid                      | `uuid`                              | —                                         | Universally Unique Identifier             | `'550e8400-e29b-41d4-a716-446655440000'` |
| **XML**         | xml                       | `xml`                               | —                                         | XML document                               | `'<tag>value</tag>'::xml`                |
| **JSON**        | json                      | `json`                              | —                                         | Textual JSON                               | `'{"a":1}'::json`                         |
|                | jsonb                     | `jsonb`                             | —                                         | Binary JSON (indexed)                      | `'{"a":1}'::jsonb`                        |
| **Arrays**      | anytype[]                 | `<type>[]`                          | —                                         | Array of any type                          | `integer[]`, `text[]`                    |
| **Ranges**      | int4range                 | `int4range`                         | —                                         | Range on ints                               | `int4range(1,10)`                        |
|                | int8range                 | `int8range`                         | —                                         | Range on bigints                           | `int8range(1,10000000000)`              |
|                | numrange                  | `numrange`                          | —                                         | Range on numerics                          | `numrange(1.0,2.0)`                      |
|                | tsrange                   | `tsrange`                           | —                                         | Range on timestamp                         | `tsrange('2025-01-01','2025-12-31')`     |
|                | tstzrange                 | `tstzrange`                         | —                                         | Range on timestamptz                       | `tstzrange('2025-01-01','2025-12-31')`   |
|                | daterange                 | `daterange`                         | —                                         | Range on dates                             | `daterange('2025-01-01','2025-12-31')`   |
| **Composite**   | composite type            | *Custom Type*                       | —                                         | Row type via `CREATE TYPE ... AS (...)`   | `CREATE TYPE foo AS (a int, b text);`    |
| **Domain**      | domain                    | *Custom Type*                       | —                                         | Constraint‑wrapped type                    | `CREATE DOMAIN positive_int AS integer CHECK (VALUE>0);` |
| **Pseudo**      | anyelement, anyarray, ... | *Pseudo‑types*                      | —                                         | Function parameter/result types (not columns) | Used in stored procedures             |

## Learn PostgreSQL - Relational Database (RDBMS)

- [Derek Banas Master postgresql](https://www.youtube.com/watch?v=85pG_pDkITY)
- [SQL course](https://www.freecodecamp.org/news/learn-sql-free-relational-database-courses-for-beginners/)
- [Coursera Introduction to relational Databases](https://www.coursera.org/learn/introduction-to-relational-databases#modules)
- [Course](https://www.youtube.com/watch?v=SpfIwlAYaKk)

- [The System Design Cheat Sheet: Relational Databases](https://hackernoon.com/the-system-design-cheat-sheet-relational-databases-part-1)
- [Database design](https://github.com/Ashifatu/Database-design-1)

## PostgreSQL Style Guide

- [postgres-sql-review-guide](https://www.bytebase.com/blog/postgres-sql-review-guide/)

### PostgreSQL reserved words

```sql
SELECT, INSERT, UPDATE, DELETE, FROM, WHERE, AND, OR, JOIN, CREATE, ALTER, DROP, TABLE, COLUMN, CONSTRAINT, PRIMARY, FOREIGN, KEY, NULL, TRUE, FALSE, CASE, WHEN, THEN, ELSE, END, AS, DISTINCT, GROUP, ORDER, BY, HAVING, IN, EXISTS, UNION, ALL, ANY, SOME, BETWEEN, LIKE, IS, NOT, LIMIT, OFFSET, CAST, COALESCE, EXTRACT.

ABORT, ANALYZE, BINARY, CLUSTER, COPY, DO, EXPLAIN, LISTEN, LOAD, LOCK, MOVE, NOTIFY, RESET, SETOF, SHOW, UNLISTEN, UNTIL, VACUUM, VERBOSE.
```

### Naming tables and columns best practices

Use only english, don't use special characters like ä,é, etc.

Only use lowercase for naming, because SQL is case-insensitive.

*Good practice*: SQL keywords: UPPER CASE

When creating identifiers (names of databases, tables, columns, etc) use `underscore_name`.

**PostgresSQL treats identifiers case insensitively when not quoted (it actually folds them to lowercase internally), and case sensitively when quoted; many people are not aware of this idiosyncrasy.**

Use plural name like `users`, `audits` for table name, that will avoid collision with reserve words.

*PostGIS* use `geog` as geography column name to avoid confusion with the data type `geography.`
*PostGIS* use `geom` as geometry column name to avoid confusion with the data type `geometry.`

Use spell out id fields for ID column like `user_id`, `contact_id`.

Avoid ambiguity for name table and columns like `temperatures` vs `temperatures_celsius`.

When possible, name foreign key columns the same as the columns they refer to.

Common words used to name DB columns `created_at`, `updated_at`, `source_id`, `destination_id`.

**Best Practices Datetime**

Time storage has the ISO8601 best practice, store datetime as `timestamptz` like `2025-08-02 23:08:00-04:00` in UTC in the database.

Use `TO_CHAR()` to convert `timestamp` to a specific format for display.

### Derek Banas notes Design a Database

- 1 Table represent 1 Real World Object: `Customers`, `Orders`, `Products`, `sales_orders`
- Columns Store 1 Piece of Information: `customers_id`, `name`, `order_id`, `product_id`
- How to table relate to each other: `foreign_key`
- Reduce Redundant Data: Normalization

- [postgresql-tutorial](https://github.com/derekbanas/postgresql-tutorial/tree/main)

### Datetime format

## Schemas

```sql
SELECT current_schema();

SELECT schema_name FROM information_schema.schemata ORDER BY schema_name;
```

A PostgreSQL database cluster contains one or more named databases. Roles and a few other object types are shared across the entire cluster. A client connection to the server can only access data in a single database, the one specified in the connection request.

A database contains one or more named schemas, which in turn contain tables. Schemas also contain other kinds of named objects, including data types, functions, and operators. Within one schema, two objects of the same type cannot have the same name.

Furthermore, tables, sequences, indexes, views, materialized views, and foreign tables share the same namespace, so that, for example, an index and a table must have different names if they are in the same schema.

There are several reasons why one might want to use schemas:

- To allow many users to use one database without interfering with each other.

- To organize database objects into logical groups to make them more manageable.

- Third-party applications can be put into separate schemas so they do not collide with the names of other objects.

PostgreSQL automatically creates a schema called public for every new database. Whatever object you create without specifying the schema name, PostgreSQL will place it into this public schema.

**Best practices: ORM should not define the Schema, it should be define in pure SQL.**

## Users

| Task | Command | Type | Notes |
|------|---------|------|-------|
| List roles | `SELECT rolname FROM pg_roles;` | SQL | Equivalent psql meta: `\du` (or `\du+` for attributes). |
| Create user (role with LOGIN) | `CREATE USER <user_name> WITH PASSWORD '<password>';` | SQL | Shorthand for `CREATE ROLE ... LOGIN`. Add options: `VALID UNTIL 'infinity'`, `CREATEDB`, etc. |
| Drop user | `DROP USER IF EXISTS <user_name>;` | SQL | Fails if role owns objects; reassign or drop objects first. |
| Change password | `ALTER ROLE <user_name> WITH PASSWORD '<password>';` | SQL | Use `ALTER ROLE ... PASSWORD NULL` to remove password. |
| Grant all on database | `GRANT ALL PRIVILEGES ON DATABASE <db_name> TO <user_name>;` | SQL | Consider principle of least privilege instead of blanket ALL. |
| Grant connect only | `GRANT CONNECT ON DATABASE <db_name> TO <user_name>;` | SQL | Needed before schema/table grants for fresh roles. |
| Grant usage on schema | `GRANT USAGE ON SCHEMA public TO <user_name>;` | SQL | Required so role can access objects within the schema. |
| Grant table privileges | `GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO <user_name>;` | SQL | For future tables: also run `ALTER DEFAULT PRIVILEGES`. |

Each row represents one role and includes details like:

Role name
Whether it can log in
Whether it can create databases
Whether it can create new roles
Whether it’s a superuser
Whether it inherits privileges from roles it’s a member of

```sql
-- List all roles with key attributes
SELECT rolname,
       rolsuper,
       rolcreatedb,
       rolcreaterole,
       rolreplication,
       rolcanlogin,
       rolconnlimit,
       rolvaliduntil
FROM pg_roles;

CREATE USER custom_user WITH PASSWORD 'password';

alter role custom_user with password 'newpassword';

drop  user  if exists custom_user;

-- Select add db
SELECT * FROM pg_database ORDER BY datname;
```

## Privileges

When an object is created, it is assigned an owner. The owner is normally the role that executed the creation statement. For most kinds of objects, the initial state is that only the owner (or a superuser) can do anything with the object. To allow other roles to use it, privileges must be granted.

There are different kinds of privileges: SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER, CREATE, CONNECT, TEMPORARY, EXECUTE, USAGE, SET, ALTER SYSTEM, and MAINTAIN. The privileges applicable to a particular object vary depending on the object's type (table, function, etc.). More detail about the meanings of these privileges appears below. The following sections and chapters will also show you how these privileges are used.

The right to modify or destroy an object is inherent in being the object's owner, and cannot be granted or revoked in itself. (However, like all privileges, that right can be inherited by members of the owning role.

Privilege and role operations:

| Task | Command | Scope | Notes |
|------|---------|-------|-------|
| Become postgres OS user (interactive) | `sudo su - postgres && psql` | OS / session | Needed to issue superuser-level grants when your current role lacks rights. |
| Grant ALL privileges on database | `GRANT ALL PRIVILEGES ON DATABASE <db_name> TO <user_name>;` | Database | Broad privileges; prefer least privilege principle. |
| Grant CONNECT on database | `GRANT CONNECT ON DATABASE <db_name> TO <user_name>;` | Database | Needed before schema/table access if revoked previously. |
| Grant USAGE on schema | `GRANT USAGE ON SCHEMA public TO <user_name>;` | Schema | Allows name resolution; pair with table/function privileges. |
| Grant EXECUTE on all functions | `GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO <user_name>;` | Schema functions | Re-run or set default privileges after adding new functions. |
| Grant DML on all tables | `GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO <user_name>;` | Tables (existing) | Use `ALTER DEFAULT PRIVILEGES` to cover future tables. |
| Grant DML on specific table | `GRANT SELECT, INSERT, UPDATE, DELETE ON <table_name> TO <user_name>;` | Single table | Add `TRUNCATE`, `REFERENCES` as needed. |
| Grant SELECT on all tables | `GRANT SELECT ON ALL TABLES IN SCHEMA public TO <user_name>;` | Read-only | For reporting roles; also grant sequence USAGE if selecting nextval. |

Tip: Default privileges example: `ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO <user_name>;`.

## Roles creation and privileges management best practice

Define roles that encapsulate set of permissions `app_readonly`, `data_analyst`. then assign those roles to a user, rather then directly granting privileges
to a specific user.

- Use non-login roles for grouping

- Create roles without the LOGIN attribute to serve purely as containers for privileges, then grant there 'group' roles to actual login-enabled users.

- Apply the **principle of least privileges**
- Separate administrative and application users

- Strong password policies
- Use scram-sha-256 for password authentification.

- Secure connection method using SSL/TLS

- Change password periodically.

- Don't use SuperUser for application

- Review privileges granted to roles and users periodically.
- Document roles structure
- Monitor user activity, implement logging auditing.

```sql


```

### Presentation For your Eyes Only: Roles, Privileges  and security in postgresql

- [Roles, Privileges  and security in postgresql](https://youtu.be/mtPM3iZFE04?si=33c_hp_yHynVEcme)

#### Users and Groups

Semantically the same as roles

By convention:

User = LOGIN
Group = NOLOGIN

PostgreSQL 8.2+ CREATE (USER | GROUP) is an alias

```sql
CREATE ROLE user1 WITH LOGIN password 'secretpassword' INHERIT;
```

When a user is set by default.  Unless otherwise set, new roles can INHERIT privileges from other roles and have unlimited connection.

**PUBLIC Role**

- All roles are granted implicit membership to PUBLIC.
- the public road cannot be deleted.
- Granted  CONNECT, USAGE, TEMPORARY, and EXECUTE by default.
- >= PG15: NO CREATE on public SCHEMA BY default FOR THE PUBLIC role.
- **BEST PRACTICES**  Revoke all privileges on the public schema from the PUBLIC role. Revoke all database privileges from the PUBLIC role.

```sql
REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON DATABASE db_name FROM PUBLIC;
```

### Privilege Inheritance

- Role can be granted membership into another role.
- If a role has INHERIT set, they automatically have usage of privileges from member roles.
- The preferred method for managing group privileges.

### Providing Object Access

SET ROLE to ap role before creation with correct default privileges.

## Manipulate tables

In PostgreSQL, a table is a fundamental database object used to store and organize data in a structured format. It functions like a spreadsheet, consisting of rows and columns.

## Manipulate Views

In PostgreSQL, a view is a named query stored in the database. It acts as a virtual table that represents the result of a SELECT statement.

Views can encapsulate complex SELECT statements, including joins, aggregations, and filtering conditions. This allows users to query the view as if it were a simple table.

Views provide a mechanism for fine-grained control over data access. You can create views that expose only a subset of data from underlying tables, hiding sensitive information.

## Manipulate Data

Common DML operations:

| Task | Command | Notes |
|------|---------|-------|
| Select all rows | `SELECT * FROM <table_name>;` | Prefer explicit column list in production. |
| Select specific columns | `SELECT <col1>, <col2> FROM <table_name>;` | Avoid `SELECT *` for performance and stability. |
| Select single row (any) | `SELECT * FROM <table_name> LIMIT 1;` | Add `ORDER BY` for deterministic result. |
| Filter rows | `SELECT * FROM <table_name> WHERE <column_name> = <value>;` | Parameterize to prevent SQL injection. |
| Insert row (positional) | `INSERT INTO <table_name> VALUES (<value_1>, <value_2>);` | Column order sensitive; fragile if schema changes. |
| Insert row (explicit) | `INSERT INTO <table_name> (<column_1>, <column_2>) VALUES (<value_1>, <value_2>);` | Safer—only specified columns. |
| Insert returning | `INSERT INTO <table_name> (<column_1>) VALUES (<value_1>) RETURNING *;` | Limit RETURNING list for large tables. |
| Upsert (merge) | `INSERT INTO <table>(id,col) VALUES($1,$2) ON CONFLICT (id) DO UPDATE SET col=EXCLUDED.col;` | Requires PK or unique index on conflict target. |
| Update rows | `UPDATE <table_name> SET <column_1> = <value_1>, <column_2> = <value_2> WHERE <column_1> = <value>;` | Always include WHERE; inspect row count. |
| Delete filtered rows | `DELETE FROM <table_name> WHERE <column_name> = <value>;` | Check `RETURNING` for confirmation. |
| Delete all rows | `DELETE FROM <table_name>;` | Consider `TRUNCATE <table_name>;` for faster bulk purge + identity reset. |
| Truncate table | `TRUNCATE <table_name> RESTART IDENTITY CASCADE;` | Fast, resets sequences; CASCADE affects referencing tables. |

### Chapter 7: Queries

```sql
[WITH with_queries] SELECT select_list FROM table_expression [sort_specification]

SELECT c1, c2, FROM t1 join t2 ON t1.id = t2.id WHERE condition GROUP BY c1, c2 HAVING condition ORDER BY c1, c2 LIMIT n OFFSET m;
```

#### 7.2.1 The FROM Clause

The FROM clause derives a table from one or more other tables given in a comma-separated table reference list.

A table reference can be a table name (possibly schema-qualified), or a derived table such as a subquery, a JOIN construct, or complex combinations of these.

The result of the FROM list is an intermediate virtual table that can then be subject to transformations by the WHERE, GROUP BY, and HAVING clauses and is finally the result of the overall table expression.

```sql
SELECT * FROM table_name;
```

##### 7.2.1.1 Joined tables

```sql
T1 { [INNER] | { LEFT | RIGHT | FULL } [OUTER] } JOIN T2 ON boolean_expression
T1 { [INNER] | { LEFT | RIGHT | FULL } [OUTER] } JOIN T2 USING ( join column list )
T1 NATURAL { [INNER] | { LEFT | RIGHT | FULL } [OUTER] } JOIN T2
```

##### 7.2.1.3 Subqueries

Subqueries specifying a derived table must be enclosed in parentheses. They may be assigned a table alias name, and optionally column alias names.

```sql
FROM (SELECT * FROM table1) AS alias_name
```

#### 7.2.2. The WHERE Clause

where search_condition is any value expression (see Section 4.2) that returns a value of type boolean.

```sql
SELECT ... FROM fdt WHERE c1 > 5

SELECT ... FROM fdt WHERE c1 IN (1, 2, 3)

SELECT ... FROM fdt WHERE c1 IN (SELECT c1 FROM t2)

SELECT ... FROM fdt WHERE c1 IN (SELECT c3 FROM t2 WHERE c2 = fdt.c1 + 10)

SELECT ... FROM fdt WHERE c1 BETWEEN (SELECT c3 FROM t2 WHERE c2 = fdt.c1 + 10) AND 100

SELECT ... FROM fdt WHERE EXISTS (SELECT c1 FROM t2 WHERE c2 > fdt.c1)
```

##### 4.2 Value Expressions

| Documentation Number  | Name                   | SQL Example                                |
|-----------------------|-----------------------|---------------------------------------------|
| 4.2.1                 | Column References     | `table_alias.column_name`                   |
| 4.2.2                 | Positional Parameters | `... WHERE name = $1`                       |
| 4.2.3                 | Subscripts            | `mytable.arraycol[4]`, `$1[10:42]`          |
| 4.2.4                 | Field Selection       | `(rowfunc(a,b)).col3`, `(compositecol).*`   |
| 4.2.5                 | Operator Invocations  | `a + b`, `NOT condition`                    |
| 4.2.6                 | Function Calls        | `sqrt(2)`, `my_func(arg1, arg2)`            |
| 4.2.7                 | Aggregate Expressions | `COUNT(*)`, `AVG(salary)`                   |
| 4.2.8                 | Window Function Calls | `row_number() OVER (PARTITION BY dept)`     |
| 4.2.9                 | Type Casts            | `'100'::integer`, `CAST(4.2 AS text)`       |
| 4.2.10                | Collation Expressions | `col COLLATE "C"`                           |
| 4.2.11                | Scalar Subqueries     | `(SELECT MAX(age) FROM people)`             |
| 4.2.12                | Array Constructors    | `ARRAY[1,2,3]`, `ARRAY(SELECT id FROM t)`   |
| 4.2.13                | Row Constructors      | `ROW(1, 'foo')`                             |
| 4.2.14                | Expression Evaluation | `(a + b) * c`                               |

#### 7.2.3 The GROUP BY Clause

After passing the WHERE filter, the derived input table might be subject to grouping, using the GROUP BY clause, and elimination of group rows using the HAVING clause.

```sql
SELECT select_list
    FROM ...
    [WHERE ...]
    GROUP BY grouping_column_reference [, grouping_column_reference]...
```

## 9.0 Functions and Operators

<https://www.postgresql.org/docs/current/functions.html>

```sql
create [or replace] function function_name(param_list)
   returns return_type
   language plpgsql
  as
$$
declare
   -- variable declaration
begin
   -- logic
end;
$$;
```

### 9.1 Logical Operators

```sql
boolean AND boolean → boolean
boolean OR boolean → boolean
NOT boolean → boolean
```

### 9.2 Comparison Operators

```sql
datatype < datatype → boolean
datatype > datatype → boolean
datatype <= datatype → boolean
datatype >= datatype → boolean
datatype = datatype → boolean
datatype <> datatype → boolean
datatype != datatype → boolean
```

### 9.3

| Operator | Description                                   | Example                                              |                    |                                    |   |                                    |
| -------- | --------------------------------------------- | ---------------------------------------------------- | ------------------ | ---------------------------------- | - | ---------------------------------- |
| `+`      | Addition                                      | `2 + 3` → `5` ([postgrespro.com][1])                 |                    |                                    |   |                                    |
| `-`      | Subtraction                                   | `2 - 3` → `-1` ([postgrespro.com][1])                |                    |                                    |   |                                    |
| `*`      | Multiplication                                | `2 * 3` → `6` ([postgrespro.com][1])                 |                    |                                    |   |                                    |
| `/`      | Division (for integers truncates toward zero) | `5 / 2` → `2` ([postgrespro.com][1])                 |                    |                                    |   |                                    |
| `%`      | Modulo (remainder)                            | `5 % 4` → `1` ([postgrespro.com][1])                 |                    |                                    |   |                                    |
| `^`      | Exponentiation (left-to-right associativity)  | `2 ^ 3` → `8`; `2 ^ 3 ^ 3` → `512` ([PostgreSQL][2]) |                    |                                    |   |                                    |
| `        | /`                                            | Square root operator                                 | `                  | / 25.0`→`5` ([postgrespro.com][1]) |   |                                    |
| `        |                                               | /`                                                   | Cube root operator | `                                  |   | / 64.0`→`4` ([postgrespro.com][1]) |
| `@`      | Unary absolute-value operator                 | `@ -5.0` → `5.0` ([postgrespro.com][1])              |                    |                                    |   |                                    |
| `&`      | Bitwise AND (integral types)                  | `91 & 15` → `11` ([postgrespro.com][1])              |                    |                                    |   |                                    |
| `        | `                                             | Bitwise OR (integral types)                          | `32                | 3`→`35` ([postgrespro.com][1])     |   |                                    |
| `#`      | Bitwise XOR (integral types)                  | `17 # 5` → `20` ([postgrespro.com][1])               |                    |                                    |   |                                    |
| `~`      | Bitwise NOT (integral types)                  | `~1` → `-2` ([postgrespro.com][1])                   |                    |                                    |   |                                    |
| `<<`     | Bit-shift left (integral types)               | `1 << 4` → `16` ([postgrespro.com][1])               |                    |                                    |   |                                    |
| `>>`     | Bit-shift right (integral types)              | `8 >> 2` → `2` ([postgrespro.com][1])                |                    |                                    |   |                                    |

[1]: https://postgrespro.com/docs/postgresql/current/functions-math?utm_source=chatgpt.com "17: 9.3. Mathematical Functions and Operators : Postgres Professional"
[2]: https://www.postgresql.org/docs/current/functions-math.html?utm_source=chatgpt.com "17: 9.3. Mathematical Functions and Operators - PostgreSQL"

| Function                                                                                           | Description                                                           | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `abs(numeric_type)`                                                                                | Absolute value                                                        | `abs(-17.4)` → `17.4` ([postgrespro.com][1])                                                             |
| `cbrt(double precision)`                                                                           | Cube root                                                             | `cbrt(64.0)` → `4` ([postgrespro.com][1])                                                                |
| `ceil(numeric)` / `ceiling(numeric)`                                                               | Nearest integer >= argument                                           | `ceil(42.2)` → `43`; `ceiling(-42.8)` → `-42` ([postgrespro.com][1])                                     |
| `degrees(double precision)`                                                                        | Convert radians → degrees                                             | `degrees(0.5)` → `28.6478…` ([postgrespro.com][1])                                                       |
| `div(y numeric, x numeric)`                                                                        | Integer quotient of y/x, truncating toward zero                       | `div(9,4)` → `2` ([postgrespro.com][1])                                                                  |
| `erf(double precision)`                                                                            | Error‐function                                                        | `erf(1.0)` → `0.842700…` ([postgrespro.com][1])                                                          |
| `erfc(double precision)`                                                                           | Complementary error‐function                                          | `erfc(1.0)` → `0.157299…` ([postgrespro.com][1])                                                         |
| `exp(numeric)` / `exp(double precision)`                                                           | Exponential e^x                                                       | `exp(1.0)` → `2.7182818…` ([postgrespro.com][1])                                                         |
| `factorial(bigint)` → numeric                                                                      | Factorial of an integer                                               | `factorial(5)` → `120` ([postgrespro.com][1])                                                            |
| `floor(numeric)` / `floor(double precision)`                                                       | Nearest integer ≤ argument                                            | `floor(42.8)` → `42`; `floor(-42.8)` → `-43` ([postgrespro.com][1])                                      |
| `gamma(double precision)`                                                                          | Gamma function                                                        | `gamma(0.5)` → `1.77245…` ([postgrespro.com][1])                                                         |
| `gcd(numeric_type, numeric_type)`                                                                  | Greatest common divisor                                               | `gcd(1071,462)` → `21` ([postgrespro.com][1])                                                            |
| `lcm(numeric_type, numeric_type)`                                                                  | Least common multiple                                                 | `lcm(1071,462)` → `23562` ([postgrespro.com][1])                                                         |
| `lgamma(double precision)`                                                                         | Natural log of absolute gamma                                         | `lgamma(1000)` → `5905.2204…` ([postgrespro.com][1])                                                     |
| `ln(numeric)` / `ln(double precision)`                                                             | Natural logarithm                                                     | `ln(2.0)` → `0.693147…` ([postgrespro.com][1])                                                           |
| `log(numeric)` / `log(double precision)`                                                           | Base-10 logarithm                                                     | `log(100)` → `2` ([postgrespro.com][1])                                                                  |
| `log(b, x)`                                                                                        | Logarithm of x in base b                                              | `log(2.0,64.0)` → `6.000…` ([postgrespro.com][1])                                                        |
| `min_scale(numeric)`                                                                               | Minimum scale (fractional digits) needed to represent value precisely | `min_scale(8.4100)` → `2` ([postgrespro.com][1])                                                         |
| `mod(y numeric_type, x numeric_type)`                                                              | Remainder of y/x                                                      | `mod(9,4)` → `1` ([postgrespro.com][1])                                                                  |
| `pi()`                                                                                             | Returns π                                                             | `pi()` → `3.141592653589793` ([postgrespro.com][1])                                                      |
| `power(a numeric, b numeric)` / `power(double precision, double precision)`                        | a raised to the power of b                                            | `power(9,3)` → `729` ([postgrespro.com][1])                                                              |
| `radians(double precision)`                                                                        | Convert degrees → radians                                             | `radians(45.0)` → `0.785398163…` ([postgrespro.com][1])                                                  |
| `round(numeric)` / `round(double precision)`                                                       | Rounds value to nearest integer (ties behaviour described)            | `round(42.4)` → `42`; `round(42.4382,2)` → `42.44` ([postgrespro.com][1])                                |
| `scale(numeric)`                                                                                   | Number of fractional decimal digits                                   | `scale(8.4100)` → `4` ([postgrespro.com][1])                                                             |
| `sign(numeric)` / `sign(double precision)`                                                         | Sign of argument (-1, 0, or +1)                                       | `sign(-8.4)` → `-1` ([postgrespro.com][1])                                                               |
| `sqrt(numeric)` / `sqrt(double precision)`                                                         | Square‐root                                                           | `sqrt(2)` → `1.414213562…` ([postgrespro.com][1])                                                        |
| `trim_scale(numeric)`                                                                              | Removes trailing zeros from fractional part                           | `trim_scale(8.4100)` → `8.41` ([postgrespro.com][1])                                                     |
| `trunc(numeric)` / `trunc(double precision)`                                                       | Truncate toward zero to integer                                       | `trunc(42.8)` → `42`; `trunc(-42.8)` → `-42` ([postgrespro.com][1])                                      |
| `trunc(v numeric, s integer)`                                                                      | Truncate to s decimal places                                          | `trunc(42.4382,2)` → `42.43` ([postgrespro.com][1])                                                      |
| `width_bucket(operand numeric, low numeric, high numeric, count integer)`                          | Histogram bucket number for operand                                   | `width_bucket(5.35,0.024,10.06,5)` → `3` ([postgrespro.com][1])                                          |
| `width_bucket(operand anycompatible, thresholds anycompatible[])`                                  | Bucket index given array of thresholds                                | `width_bucket(now(), array['yesterday','today','tomorrow']::timestamptz[])` → `2` ([postgrespro.com][1]) |
| `random()`                                                                                         | Returns pseudo‐random double precision in [0.0,1.0)                   | `random()` → e.g. `0.897124…` ([postgrespro.com][1])                                                     |
| `random(min integer, max integer)` / other types                                                   | Returns random value between min and max inclusive                    | `random(1,10)` → e.g. `7` ([postgrespro.com][1])                                                         |
| `random_normal([mean double precision, stddev double precision])`                                  | Returns a random value from normal distribution                       | `random_normal(0.0,1.0)` → e.g. `0.051285…` ([postgrespro.com][1])                                       |
| `setseed(double precision)`                                                                        | Sets seed for random(), random_normal() calls                         | `setseed(0.12345)` ([postgrespro.com][1])                                                                |
| `acos(double precision)` / `acosd(double precision)`                                               | Inverse cosine (radians / degrees)                                    | `acos(1)` → `0`; `acosd(0.5)` → `60` ([postgrespro.com][1])                                              |
| `asin(double precision)` / `asind(double precision)`                                               | Inverse sine                                                          | `asin(1)` → `1.5708…`; `asind(0.5)` → `30` ([postgrespro.com][1])                                        |
| `atan(double precision)` / `atand(double precision)`                                               | Inverse tangent                                                       | `atan(1)` → `0.785398…`; `atand(1)` → `45` ([postgrespro.com][1])                                        |
| `atan2(y double precision, x double precision)` / `atan2d(y double precision, x double precision)` | Inverse tangent of y/x (radians or degrees)                           | `atan2(1,0)` → `1.5708…`; `atan2d(1,0)` → `90` ([postgrespro.com][1])                                    |
| `cos(double precision)` / `cosd(double precision)`                                                 | Cosine (radians / degrees)                                            | `cos(0)` → `1`; `cosd(60)` → `0.5` ([postgrespro.com][1])                                                |
| `cot(double precision)` / `cotd(double precision)`                                                 | Cotangent (radians / degrees)                                         | `cot(0.5)` → `1.8304…`; `cotd(45)` → `1` ([postgrespro.com][1])                                          |
| `sin(double precision)` / `sind(double precision)`                                                 | Sine (radians / degrees)                                              | `sin(1)` → `0.84147…`; `sind(30)` → `0.5` ([postgrespro.com][1])                                         |
| `tan(double precision)` / `tand(double precision)`                                                 | Tangent (radians / degrees)                                           | `tan(1)` → `1.55740…`; `tand(45)` → `1` ([postgrespro.com][1])                                           |
| `sinh(double precision)` / `cosh(double precision)` / `tanh(double precision)`                     | Hyperbolic sine / cosine / tangent                                    | `sinh(1)` → `1.17520119…`; `cosh(0)` → `1`; `tanh(1)` → `0.761594…` ([postgrespro.com][1])               |
| `asinh(double precision)` / `acosh(double precision)` / `atanh(double precision)`                  | Inverse hyperbolic functions                                          | `asinh(1)` → `0.881373…`; `acosh(1)` → `0`; `atanh(0.5)` → `0.549306…` ([postgrespro.com][1])            |

### 9.4 String Functions and Operators

| Function / Operator                                      | Description                                                                                                                | Example                                                                   |                                                                                 |         |   |                                               |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------- | - | --------------------------------------------- |
| `string                                                  |                                                                                                                            | string`                                                                   | Concatenates two strings (also works if one side is non-string and convertible) | `'Post' |   | 'greSQL'`→`PostgreSQL` ([postgrespro.com][1]) |
| `btrim(string [, characters])`                           | Remove the longest string of the specified characters (default space) from both start & end of `string`                    | `btrim('xyxtrimyyx', 'xyz')` → `trim` ([postgrespro.com][1])              |                                                                                 |         |   |                                               |
| `text IS [NOT] form NORMALIZED`                          | Test whether `text` is in the specified Unicode normalization form (`NFC`, `NFD`, `NFKC`, `NFKD`) – only for UTF8 encoding | `U&'\0061\0308bc' IS NFD NORMALIZED` → `t` ([postgrespro.com][1])         |                                                                                 |         |   |                                               |
| `bit_length(text)` → integer                             | Number of bits in the string (8 × octet_length)                                                                            | `bit_length('jose')` → `32` ([postgrespro.com][1])                        |                                                                                 |         |   |                                               |
| `character_length(text)` / `char_length(text)` → integer | Number of characters in the string (not bytes)                                                                             | `char_length('josé')` → `4` ([postgrespro.com][1])                        |                                                                                 |         |   |                                               |
| `lower(text)` → text                                     | Convert the string to lowercase (according to locale)                                                                      | `lower('TOM')` → `tom` ([postgrespro.com][1])                             |                                                                                 |         |   |                                               |
| `lpad(string, length [, fill])` → text                   | Pads `string` on the **left** with `fill` (default space) to reach `length`. If too long, truncates on the right.          | `lpad('hi', 5, 'xy')` → `xyxhi` ([postgrespro.com][1])                    |                                                                                 |         |   |                                               |
| `ltrim(string [, characters])` → text                    | Remove the longest string containing only `characters` (default space) from the **start** of `string`                      | `ltrim('zzzytest', 'xyz')` → `test` ([postgrespro.com][1])                |                                                                                 |         |   |                                               |
| `normalize(text [, form])` → text                        | Convert text to the specified Unicode normalization form (NFC by default) — only for UTF8 encoding                         | `normalize(U&'\0061\0308bc', NFC)` → `U&'\00E4bc'` ([postgrespro.com][1]) |                                                                                 |         |   |                                               |
| `octet_length(text)` → integer                           | Returns number of bytes in the string                                                                                      | `octet_length('josé')` → `5` (in UTF8) ([postgrespro.com][1])             |                                                                                 |         |   |                                               |
| `octet_length(character)` → integer                      | Same as above but input is type `character`; won’t strip trailing spaces                                                   | `octet_length('abc '::character(4))` → `4` ([postgrespro.com][1])         |                                                                                 |         |   |                                               |
| `position(substring IN string)` → integer                | Returns first starting index (1-based) of `substring` in `string`, or zero if not present                                  | `position('om' in 'Thomas')` → `3` ([postgrespro.com][1])                 |                                                                                 |         |   |                                               |
| `rpad(string, length [, fill])` → text                   | Pads `string` on the **right** with `fill` (default space) to reach `length`. If too long, truncates on right.             | `rpad('hi', 5, 'xy')` → `hixyx` ([postgrespro.com][1])                    |                                                                                 |         |   |                                               |

### 9.7 Patterns Matching

| Category                  | Operator / Function                                                                        | Description                                                                                                                                                                                                                   | Example                                                                                          |                        |                                |
| ------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------- | ------------------------------ |
| SQL-style wildcard        | `string LIKE pattern [ESCAPE escape_char]` / `NOT LIKE`                                    | Simple pattern matching: `%` = any sequence of characters (zero or more), `_` = any single character; ESCAPE allows overriding the wildcard chars. ([PostgreSQL][1])                                                          | `'abc' LIKE 'a%'` → true ([PostgreSQL][1])                                                       |                        |                                |
| Case-insensitive wildcard | `string ILIKE pattern` / `NOT ILIKE`                                                       | PostgreSQL extension: case-insensitive version of LIKE. ([PostgreSQL][1])                                                                                                                                                     | `'AbC' ILIKE 'a%'` → true                                                                        |                        |                                |
| Standard SQL “regex like” | `string SIMILAR TO pattern [ESCAPE escape_char]` / `NOT SIMILAR TO`                        | Pattern matching using SQL:1999 regular-expression style: uses `_`, `%` like LIKE, plus `                                                                                                                                     | `,`*`,`+`,`?`,`{m,n}`,`[...]` as in regex. ([PostgreSQL][1])                                | `'abc' SIMILAR TO '%(b | d)%'` → true ([PostgreSQL][1]) |
| POSIX regular expressions | Operators: `~`, `~*`, `!~`, `!~*`                                                          | Regex operators on text: `~` = case-sensitive match; `~*` = case-insensitive; `!~` & `!~*` = negations. Entire expression may match any part of the string (not just start to end) unless anchored. ([PostgreSQL][1])         | `'abcd' ~ 'bc'` → true ([PostgreSQL][1])                                                         |                        |                                |
| POSIX regex functions     | `regexp_like(string, pattern [, flags])`                                                   | Returns Boolean – whether the pattern matches the string. Equivalent to `~` operator when no flags used. ([PostgreSQL][1])                                                                                                    | `regexp_like('Hello World','world','i')` → true ([PostgreSQL][1])                                |                        |                                |
| POSIX regex functions     | `substring(string from pattern)` or `substring(string similar pattern escape escape_char)` | Extract substring matching the pattern; returns the first match (or parenthesized sub-expression if present) or NULL if none. ([PostgreSQL][1])                                                                               | `substring('foobar' from 'o.b')` → `oob` ([PostgreSQL][1])                                       |                        |                                |
| POSIX regex functions     | `regexp_count(string, pattern [, start [, flags]])`                                        | Count number of non-overlapping occurrences matching the pattern. ([PostgreSQL][1])                                                                                                                                           | `regexp_count('ABCABCAXYaxy','A.')` → 3 ([PostgreSQL][1])                                        |                        |                                |
| POSIX regex functions     | `regexp_instr(string, pattern [, start [, N [, endoption [, flags [, subexpr ]]]]])`       | Return the position (start or end depending on endoption) of the Nth occurrence matching the pattern (or of a particular subexpression) or zero if no such match. ([PostgreSQL][1])                                           | `regexp_instr('number of your street, town zip, FR','[^,]+',1,2)` → 23 ([PostgreSQL][1])         |                        |                                |
| POSIX regex functions     | `regexp_substr(string, pattern [, start [, N [, flags [, subexpr ]]]])`                    | Returns the substring matching the pattern (or specified subexpression) or NULL if no match. Available in PostgreSQL 15+. ([PostgreSQL][1])                                                                                   | `regexp_substr('ABCDEFGHI','(c..)(...)',1,1,'i',2)` → `FGH` ([PostgreSQL][1])                    |                        |                                |
| POSIX regex functions     | `regexp_replace(string, pattern, replacement [, start [, N [, flags ]]]])`                 | Replace occurrences matching `pattern` with `replacement`. By default replaces first match; with `N=0` or `flags` containing `g` replaces all. Supports back-references in replacement via `\1`, `\&`, etc. ([PostgreSQL][1]) | `regexp_replace('foobarbaz','b..','X','g')` → `fooXXbaz` ([PostgreSQL][1])                       |                        |                                |
| POSIX regex functions     | `regexp_split_to_table(string, pattern [, flags])`                                         | Split `string` using regex `pattern` as delimiter and return each part as a row of a table. ([PostgreSQL][1])                                                                                                                 | Splitting “the quick brown fox” on `\s+` gives rows: the / quick / brown / fox ([PostgreSQL][1]) |                        |                                |
| POSIX regex functions     | `regexp_split_to_array(string, pattern [, flags])`                                         | Same as above, but returns an array of text parts instead of a table. ([PostgreSQL][1])                                                                                                                                       | `{the,quick,brown,fox}` ([PostgreSQL][1])                                                        |                        |                                |

## Create function

<https://www.postgresql.org/docs/current/sql-createfunction.html>

CREATE FUNCTION defines a new function. CREATE OR REPLACE FUNCTION will either create a new function, or replace an existing definition. To be able to define a function, the user must have the USAGE privilege on the language.

If a schema name is included, then the function is created in the specified schema.

```sql
CREATE OR REPLACE FUNCTION "custom-schema".add(integer, integer) RETURNS integer
    AS 'select $1 + $2;'
    LANGUAGE SQL
    IMMUTABLE
    RETURNS NULL ON NULL INPUT;

```

## 11.1 Indexes

- [Secret To Optimizing SQL Queries - Understand The SQL Execution Order](https://www.youtube.com/watch?v=BHwzDmr6d7s&t=28s)
- [PostgreSQL Indexes](https://devcenter.heroku.com/articles/postgresql-indexes)

Creating a index will become useful if the database have to return often the same read query. Difference in performance will start to show at the scale of 10 millions of rows.

Suppose we have a table similar to this:

```sql
CREATE TABLE test1 (
    id integer,
    content varchar
);

SELECT content FROM test1 WHERE id = constant;
```

With no advance preparation, the system would have to scan the entire test1 table, row by row, to find all matching entries.

But if the system has been instructed to maintain an index on the id column, it can use a more efficient method for locating matching rows. For instance, it might only have to walk a few levels deep into a search tree.

```sql
CREATE INDEX test1_id_index ON test1 (id);
VACUUM ANALYZE test1 id;
EXPLAIN ANALYSE
SELECT id from test1;


-- multi-column index
CREATE INDEX test1_id_content_index ON test1 (id, content);

```

PostgreSQL's default index type is the B-tree (Balanced Tree) index, usefull for one dimension data types. It is designed to keep data sorted and balanced across all levels of the tree.

The structure allows PostgreSQL to quickly locate rows without scanning the entire table.

After creating an index, PostgreSQL must keep it synchronized with the table.

For example, when inserting, updating, or deleting data from the contacts table, PostgreSQL updates the index to reflect the changes accordingly.

### 11.2 INDEX TYPES

11.2.1 B-tree
11.2.2 Hash
11.2.3 GiST
11.2.4 SP-GiST
11.2.5 GIN
11.2.6 BRIN

## 14 Performances Tips

`pg_stat_statements` allows you to quickly identify problematic or slow Postgres queries, providing instant visibility into your database performance.

**Best Practices**

Never disable autovacuum, even if you’re manually vacuuming.
Monitor pg_stat_all_tables and pg_stat_user_tables to check dead tuples.
Adjust autovacuum settings (autovacuum_naptime, autovacuum_vacuum_cost_limit) for high-write workloads.
Use pg_stat_activity and logs to identify long-running autovacuum operations.

## Debugging

<http://www.postgresql.org/docs/current/static/using-explain.html>

<http://www.postgresql.org/docs/current/static/runtime-config-logging.html>

### Explain

This command displays the execution plan that the PostgreSQL planner generates for the supplied statement. The execution plan shows how the table(s) referenced by the statement will be scanned — by plain sequential scan, index scan, etc. — and if multiple tables are referenced, what join algorithms will be used to bring together the required rows from each input table.

<https://www.youtube.com/watch?v=uCSYp_m8A9o>

The costs are measured in arbitrary units determined by the planner's cost parameters (see Section 18.7.2). Traditional practice is to measure the costs in units of disk page fetches; that is, seq_page_cost is conventionally set to 1.0 and the other cost parameters are set relative to that.

```sql
EXPLAIN [ ( option [, ...] ) ] statement

where option can be one of:

    ANALYZE [ boolean ]
    VERBOSE [ boolean ]
    COSTS [ boolean ]
    SETTINGS [ boolean ]
    GENERIC_PLAN [ boolean ]
    BUFFERS [ boolean ]
    SERIALIZE [ { NONE | TEXT | BINARY } ]
    WAL [ boolean ]
    TIMING [ boolean ]
    SUMMARY [ boolean ]
    MEMORY [ boolean ]
    FORMAT { TEXT | XML | JSON | YAML }
```

```sql
EXPLAIN (ANALYZE, BUFFERS, COSTS, SETTINGS, VERBOSE)
SELECT
    COUNT(*)
FROM
    "warehouse-schema".buildings
WHERE
    building_type = 'Résidence';
```

*Important*

Keep in mind that the statement is actually executed when the ANALYZE option is used. Although EXPLAIN will discard any output that a SELECT would return, other side effects of the statement will happen as usual. If you wish to use EXPLAIN ANALYZE on an `INSERT`, `UPDATE`, `DELETE`, `MERGE`, `CREATE TABLE AS`, or `EXECUTE` statement without letting the command affect your data, use this approach:

```sql
BEGIN;
EXPLAIN ANALYZE ...;
ROLLBACK;
```

### Analyse

<https://www.postgresql.org/docs/current/sql-analyze.html>

### VACUUM ANALYZE

<https://www.postgresql.org/docs/current/sql-vacuum.html>

PostgreSQL uses a Multi-Version Concurrency Control (MVCC) model. This means every time a row is updated or deleted, the old version of the row isn’t immediately removed — instead, it’s marked as dead and remains in the table. These dead rows, also known as dead tuples, are invisible to future transactions but still consume storage space and slow down sequential scans.

Over time, this can lead to table bloat, degraded query performance, and even critical failures if not managed properly. That’s where the VACUUM process comes into play.

The `VACUUM` command scans your tables and reclaims space occupied by dead tuples. It also updates visibility maps and statistics so the query planner can work efficiently.

```sql
VACUUM ANALYZE "warehouse-schema".buildings;
```

Never disable autovacuum, even if you’re manually vacuuming.
Monitor pg_stat_all_tables and pg_stat_user_tables to check dead tuples.
Adjust autovacuum settings (autovacuum_naptime, autovacuum_vacuum_cost_limit) for high-write workloads.
Use pg_stat_activity and logs to identify long-running autovacuum operations.




## Scripting

Script and backup / restore operations:

| Task | Command | Notes |
|------|---------|-------|
| Run local SQL file on remote host | `psql -h <host> -U <username> -d <database> -f <local_file>` | Long option form: `psql --host=... --username=... --dbname=... --file=...`. Requires network access & permissions. |
| Full logical backup (schema+data) | `pg_dump <database_name> > dump.sql` | Produces plain SQL; use `-Fc` for custom format enabling parallel restore. |
| Backup data only | `pg_dump -a <database_name> > data.sql` | Long form: `--data-only`; excludes schema definitions. |
| Backup schema only | `pg_dump -s <database_name> > schema.sql` | Long form: `--schema-only`; no table data. |
| Restore (custom format) | `pg_restore -d <database_name> <file_path>` | Use with dumps created via `pg_dump -Fc`; add `-j <n>` for parallel threads. |
| Restore data only (custom) | `pg_restore -d <database_name> -a <file_path>` | Long form: `--data-only`; target DB & objects must already exist (unless using `-c`). |
| Restore schema only (custom) | `pg_restore -d <database_name> -s <file_path>` | Long form: `--schema-only`; creates object definitions only. |
| Export table to CSV (server side) | `\copy <table_name> TO '<file_path>' CSV` | Uses psql's `\copy` (client-side); add `HEADER` for column headers. |
| Export selected columns to CSV | `\copy <table_name>(<col1>,<col2>,<col3>) TO '<file_path>' CSV` | Order dictates column order in file. |
| Import CSV into table | `\copy <table_name> FROM '<file_path>' CSV` | Ensure file encodes text correctly (UTF-8); add `HEADER` if file has header row. |
| Import selected columns from CSV | `\copy <table_name>(<col1>,<col2>,<col3>) FROM '<file_path>' CSV` | Omitted columns use defaults / NULL. |
| Faster bulk load (binary) | `\copy <table_name> FROM '<file_path>' (FORMAT binary)` | Requires matching binary format file (`pg_dump -Fc` isn't directly used here). |
| Terminate conflicting sessions (pre-restore) | `SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname='<database_name>' AND pid <> pg_backend_pid();` | Use cautiously; disconnects users. |
| Parallel dump | `pg_dump -Fd -j 4 -f <dir_path> <database_name>` | Directory format; combine with `pg_restore -d <db> -j 4 <dir_path>`. |
| Compressed dump | `pg_dump -Fc <database_name> > dump.custom` | Custom format; can be selectively restored. |

Reference: [COPY docs](https://www.postgresql.org/docs/current/sql-copy.html)

## Advanced Features

<http://www.tutorialspoint.com/postgresql/postgresql_constraints.htm>
