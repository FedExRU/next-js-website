import { type Knex } from 'knex'

export const up = async (knex: Knex) => {
  await knex.schema.createTable('pages', table => {
    table.increments('id').primary()
    table.integer('parent_id').nullable().references('id').inTable('pages')
    table.string('code').notNullable()
    table.string('name').notNullable()
    table.string('short_name').nullable()
    table.string('path').notNullable()
    table.string('description').nullable()
    table.string('metaTitle').nullable()
    table.string('metaDescription').nullable()
    table.string('metaKeywords').nullable()
    table
      .integer('created_by')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
    table.timestamps(true, true)
    table.timestamp('deleted_at').nullable()
    table.timestamp('disabled_at').nullable()
  })

  await knex
    .insert([
      {
        code: 'HOME',
        created_by: 1,
        metaDescription:
          'Shop stylish and affordable furniture online at 3Elegant. Discover a wide selection of sofas, beds, dining sets, and home decor to create your dream space. Fast shipping & easy returns!',
        metaKeywords:
          'furniture, furniture store, online furniture, sofas, couches, beds, dining sets, tables, chairs, home decor, living room furniture, bedroom furniture, modern furniture, affordable furniture, 3Elegant',
        metaTitle:
          'Furniture Store Online | Sofas, Beds, Dining & More - 3Elegant',
        name: 'Home Page',
        path: '/',
        short_name: 'Home',
        updated_by: 1,
      },
    ])
    .into('pages')

  await knex
    .insert([
      {
        code: 'SHOP',
        created_by: 1,
        description: 'Let\’s design the place you always imagined',
        metaDescription:
          'Browse our extensive furniture collection at 3Elegant. Find the perfect sofas, beds, dining sets, and more to furnish your home. Shop now for quality furniture at affordable prices!',
        metaKeywords:
          'furniture, shop furniture, buy furniture, furniture online, sofas, beds, dining tables, chairs, living room furniture, bedroom furniture, home furniture, 3Elegant',
        metaTitle: 'Shop All Furniture - 3Elegant | Sofas, Beds, Tables & More',
        name: 'Shop Page',
        parent_id: 1,
        path: '/shop',
        short_name: 'Shop',
        updated_by: 1,
      },
    ])
    .into('pages')
}

export const down = function (knex: Knex) {
  return knex.schema.dropTable('pages')
}
