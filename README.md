# Porcupine Book Store

Online book catalogue

## MySQL Database

Porcupine Book Store is designed to store and retrieve
data from a MySQL database configured via the `MYSQL_URL`
environment variable.

Changes to the database are performed via migrations using
the excellent `knex` database driver and migration library.

A single database table named `books` is used for the web
application, with several columns:

- `id`: integer primary key auto incremented
- `uid`: uuid.v4 globally unique identifier
- `title`: string | required
- `author`: string | required
- `image_url`: string
- `link_url`: string
- `isbn`: string

## Core BooksDB Library

The web app queries the datase using the popular `knex` SQL 
driver for Node.js.

`BooksDB` has five functions

- `BooksDB.addBook()`
- `BooksDB.allBooks()`
- `BooksDB.removeBook()`
- `BooksDB.searchBookTitle()`
- `BooksDB.searchBookAuthor()`

The core database library is test-driven using mocha and chance.

## Web User Interface

The web app has an html user interface for browsing
and searching the online catalogue.

Three pages will be publicly-facing, an index page,
search by title page, and search by author page:

- GET /
- GET /search-books/by-title/human+action
- GET /search-books/by-author/rothbard

User Interface is test-driven using zombie.js and mocha.

## Admin Command Line Interface

Each function for the BooksDB library is exposed as an admin
command line tool:

Run `npm link` to install the `porcupine-books` program

- `porcupine-books add "America's Great Depression" "Murray Rothbard"`
- `porcupine-books all`
- `porcupine-books remove <id>`
- `porcupine-books search:title Depression`
- `porcupine-books search:author Rothbard`

The admin provides a `MYSQL_URL` variable in their shell environment

## HTTP/JSON API

For native mobile, desktop, and robotics applications
the web app provides a simple JSON API with three
publicly-facing endpoints

- GET /api/books
- GET /api/search-books/by-title/human+action
- GET /api/search-books/by-author/rothbard

The http/json api is test-driven using supertest and mocha.

