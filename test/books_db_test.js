const assert = require("assert")
process.env.DATABASE_URL = "mysql://mysql:mysql@192.168.99.100:3306/"

const BooksDB = require("../lib/books_db")
const Chance = require("chance")

const chance = new Chance()

describe("BooksDB Module", () => {

  it("#allBooks should list all books in the library", done => {

    BooksDB.allBooks().then(books => {
      assert(books.length >= 0)
      done()
    })
    .catch(error => {
      console.error(error.message)
    })
  })

  it("#addBook should add a book to the database", done => {
    const author = "Murray Rothbard"
    const title = "America's Great Depress"
    const imageUrl = "http://t2.gstatic.com/images?q=tbn:ANd9GcSsOox7jfmQi-N5Ksn1SbAHvyqfXz1G9QpGpvFAH62JyqG3hmnX"
    const linkUrl = "https://mises.org/sites/default/files/Americas%20Great%20Depression_3.pdf"

    BooksDB.addBook({
      author: author,
      title: title,
      image_url: imageUrl,
      link_url: linkUrl
    })
    .then(book => {
      assert(book.id >= 1)
      assert(book.uid)
      assert.strictEqual(book.image_url, imageUrl)
      assert.strictEqual(book.link_url, linkUrl)
      assert.strictEqual(book.title, title)
      assert.strictEqual(book.author,author)
      done()
    })
  })

  it("#deleteBook should remove a book from the database", done => {
    addBook().then(book => {
      return BooksDB.deleteBook(book.id)
    })
    .then(() => {
      done()
    })
  })
})

function addBook() {

  const author = chance.name()
  const title = chance.sentence()
  const imageUrl = chance.url({extensions: ['gif', 'jpg', 'png']})
  const linkUrl = chance.url()

  return BooksDB.addBook({
    author: author,
    title: title,
    image_url: imageUrl,
    link_url: linkUrl
  })
}


