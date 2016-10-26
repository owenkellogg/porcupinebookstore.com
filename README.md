# Porcupine Book Store

Online book catalogue

## Database

Porcupine Book Store is designed to store and retrieve
data from a MySQL database configured via the `MYSQL_URL`
environment variable.

### Migrations

Changes to the database are performed via migrations using
the excellent `knex` database driver and migration library.

## BooksDB Library

The web app queries the datase using the popular `knex` SQL 
driver for Node.js.

`BooksDB` has five functions

- `BooksDB.addBook()`
- `BooksDB.allBooks()`
- `BooksDB.removeBook()`
- `BooksDB.searchBookTitle()`
- `BooksDB.searchBookAuthor()`

## User Interface

The web app has an html user interface for browsing
and searching the online catalogue.

## Admin Command Line Interface

Each function for the BooksDB library is exposed as an admin
command line tool:

### CLI Installation

Run `npm link` to install the `porcupine-books` program

- `porcupine-books add "America's Great Depression" "Murray Rothbard"`
- `porcupine-books all`
- `porcupine-books remove <id>`
- `porcupine-books search:title Depression`
- `porcupine-books search:author Rothbard`

