const Browser = require('zombie');
const app = require("../lib/app")
const BooksDB = require("../lib/books_db")

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000)

describe('User visits home page', () => {

  const browser = new Browser();

  before(done => {
    app.listen(3000, () => {

      BooksDB.addBook({
        title: "Frankenstein",
        author: "Mary Shelly"
      }) 
      .then(() => {
        browser.visit('/', done)
      })
    })
  });

  it('should be successful', () => {
    browser.assert.success()
  })

  it('should have the correct page title', () => {
    browser.assert.text('title', 'Porcupine Book Store')
  })

  it('should have the correct header', () => {
    browser.assert.text('h1', 'Porcupine Book Store')
  })
  
  it("should have a list of books", () => {
    browser.assert.elements('ul#book-catalogue li', { atLeast: 1 });
  })
})
