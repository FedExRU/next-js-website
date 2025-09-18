import { type Knex } from 'knex'

export const up = async (knex: Knex) => {
  await knex.schema.createTable('roles', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('name').notNullable()
    table.timestamps(true, true)
  })
  await knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('middle_name').nullable()
    table.string('email').notNullable()
    table.string('old_password').nullable().defaultTo(null)
    table.string('password').notNullable()
    table.timestamps(true, true)
    table.timestamp('deleted_at').nullable()
    table.timestamp('disabled_at').nullable()
  })
  await knex.schema.createTable('user_roles', table => {
    table.increments('id').primary()
    table
      .integer('role_id')
      .notNullable()
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE')
    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
    table.timestamps(true, true)
    table.timestamp('deleted_at').nullable()
    table.timestamp('disabled_at').nullable()
  })
}

export const down = function (knex: Knex) {
  return knex.schema.dropTable('users').dropTable('user_roles')
}
