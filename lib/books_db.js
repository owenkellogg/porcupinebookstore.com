const knex = require("./knex")
const uuid = require("uuid")

module.exports.allBooks = () => {
  return knex('books').select()
}

module.exports.addBook = bookParams => {
  bookParams.uid = uuid.v4()

  return knex('books').insert(bookParams)
    .then(created => knex('books').select().where('id', created[0]))
    .then(records => records[0])
}

module.exports.deleteBook = bookId => {

  return knex('books').where('id', bookId).del()
}
