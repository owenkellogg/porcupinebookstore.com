const express = require("express")
const app = express()
const BooksDB = require("./books_db")

app.set('view engine', 'ejs')

app.get('/', (req, res, next) => {

  BooksDB.allBooks().then(books => {
    res.render("../views/index", {
      books: books
    })
  })
})

module.exports = app

