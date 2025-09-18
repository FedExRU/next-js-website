import argon2 from 'argon2'
import { type Knex } from 'knex'

export const up = async (knex: Knex) => {
  await knex
    .insert([
      {
        code: 'ADMIN',
        name: 'Website administrator',
      },
    ])
    .into('roles')

  await knex
    .insert([
      {
        email: 'admin@admin.ru',
        first_name: 'Pavel',
        last_name: 'Uryadyshev',
        middle_name: 'Alexandrovich',
        password: await argon2.hash('admin'),
      },
    ])
    .into('users')

  await knex
    .insert([
      {
        role_id: 1,
        user_id: 1,
      },
    ])
    .into('user_roles')
}

export const down = async (knex: Knex) => {
  await knex('users').truncate()
  await knex('user_roles').truncate()
}
