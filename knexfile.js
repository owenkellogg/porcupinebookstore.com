require("dotenv")

var dbURL = require("url-parse")(process.env.MYSQL_URL)

module.exports = {
  development : {
    client: 'mysql',
    connection: {
      host : dbURL.hostname,
      user : dbURL.username,
      password : dbURL.password,
      database : dbURL.pathname.replace("/", "")
    }
  }
}

