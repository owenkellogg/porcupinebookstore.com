
exports.up = function(knex, Promise) {

  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary();
    table.uuid('uid');
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.string('image_url');
    table.string('link_url');
    table.string('isbn');
    table.timestamps();

    table.unique('uid')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
