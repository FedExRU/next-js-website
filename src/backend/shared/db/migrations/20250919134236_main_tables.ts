import { type Knex } from 'knex'

export const up = async (knex: Knex) => {
  //#region Create icons
  await knex.schema.createTable('icons', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('name').notNullable()
    table.jsonb('value').notNullable()
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
  //#region Create colors
  await knex.schema.createTable('colors', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('name').notNullable()
    table.string('value').notNullable()
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
  //#endregion

  //#region Create galleries
  await knex.schema.createTable('galleries', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('name').notNullable()
    table.string('description').nullable()
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

  await knex.schema.createTable('images', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('description').nullable()
    table.string('image').notNullable()
    table.string('image_large').nullable()
    table.string('image_medium').nullable()
    table.string('image_small').nullable()
    table.integer('size').notNullable()
    table.string('extension').notNullable()
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

  await knex.schema.createTable('gallery_images', table => {
    table.increments('id').primary()
    table.boolean('primary_image').defaultTo(false).notNullable()
    table
      .integer('gallery_id')
      .notNullable()
      .references('id')
      .inTable('galleries')
      .onDelete('CASCADE')
    table
      .integer('image_id')
      .notNullable()
      .references('id')
      .inTable('images')
      .onDelete('CASCADE')
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

  //#endregion

  //#region Create attributes
  await knex.schema.createTable('attribute_types', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('name').notNullable()
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

  await knex.schema.createTable('attributes', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('name').notNullable()
    table
      .integer('attribute_type_id')
      .notNullable()
      .references('id')
      .inTable('attribute_types')
      .onDelete('CASCADE')
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

  await knex.schema.createTable('attribute_dictionary_values', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('value').notNullable()
    table
      .integer('attribute_id')
      .notNullable()
      .references('id')
      .inTable('attributes')
      .onDelete('CASCADE')
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
  //#endregion

  //#region Create categories
  await knex.schema.createTable('categories', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('name').notNullable()
    table.string('description').nullable()
    table
      .integer('gallery_id')
      .notNullable()
      .references('id')
      .inTable('galleries')
      .onDelete('CASCADE')
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

  await knex.schema.createTable('category_attributes', table => {
    table.increments('id').primary()

    table
      .integer('category_id')
      .notNullable()
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE')
    table
      .integer('attribute_id')
      .notNullable()
      .references('id')
      .inTable('attributes')
      .onDelete('CASCADE')
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
  //#endregion

  //#region Create products
  await knex.schema.createTable('products_base', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('name').notNullable()
    table.string('description').nullable()
    table.string('additional_info').nullable()

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

  await knex.schema.createTable('product_base_categories', table => {
    table.increments('id').primary()

    table
      .integer('product_base_id')
      .notNullable()
      .references('id')
      .inTable('products_base')
      .onDelete('CASCADE')
    table
      .integer('category_id')
      .notNullable()
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE')
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

  await knex.schema.createTable('product_base_attributes', table => {
    table.increments('id').primary()

    table
      .integer('product_base_id')
      .notNullable()
      .references('id')
      .inTable('products_base')
      .onDelete('CASCADE')
    table
      .integer('category_attribute_id')
      .notNullable()
      .references('id')
      .inTable('category_attributes')
      .onDelete('CASCADE')
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

  await knex.schema.createTable('product_base_attribute_values', table => {
    table.increments('id').primary()
    table.string('value').nullable()

    table
      .integer('product_base_attribute_id')
      .notNullable()
      .references('id')
      .inTable('product_base_attributes')
      .onDelete('CASCADE')
    table
      .integer('attribute_dictionary_value_id')
      .nullable()
      .references('id')
      .inTable('attribute_dictionary_values')
      .onDelete('CASCADE')
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

  await knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('sku').notNullable()
    table.string('name').notNullable()
    table.string('slug').notNullable()
    table.integer('quantity').notNullable()
    table.float('price').notNullable()
    table.boolean('new').nullable().defaultTo(false)
    table
      .integer('product_base_id')
      .notNullable()
      .references('id')
      .inTable('products_base')
      .onDelete('CASCADE')
    table
      .integer('color_id')
      .notNullable()
      .references('id')
      .inTable('colors')
      .onDelete('CASCADE')
    table
      .integer('color_image_id')
      .nullable()
      .references('id')
      .inTable('images')
      .onDelete('CASCADE')
    table
      .integer('gallery_id')
      .nullable()
      .references('id')
      .inTable('galleries')
      .onDelete('CASCADE')
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
  //#endregion

  //#region Create discounts
  await knex.schema.createTable('discounts', table => {
    table.increments('id').primary()
    table.string('name').nullable()
    table.string('description').nullable()
    table.float('percentage').nullable()
    table.dateTime('start_date', { useTz: true }).nullable()
    table.dateTime('end_date', { useTz: true }).nullable()
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

  await knex.schema.createTable('products_discounts', table => {
    table.increments('id').primary()
    table
      .integer('product_id')
      .notNullable()
      .references('id')
      .inTable('products')
    table
      .integer('discount_id')
      .notNullable()
      .references('id')
      .inTable('discounts')
    table.float('price').nullable()
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
  //#endregion

  //#region Create banners
  await knex.schema.createTable('banner_views', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('name').notNullable()
    table.string('description').nullable()

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

  await knex.schema.createTable('banner_placements', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('name').notNullable()
    table.string('description').nullable()

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

  await knex.schema.createTable('banners', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('text').nullable()
    table.string('url').nullable()
    table.dateTime('start_date', { useTz: true }).nullable()
    table.dateTime('end_date', { useTz: true }).nullable()
    table
      .integer('banner_view_id')
      .nullable()
      .references('id')
      .inTable('banner_views')
      .onDelete('CASCADE')
    table
      .integer('image_id')
      .nullable()
      .references('id')
      .inTable('images')
      .onDelete('CASCADE')
    table
      .integer('icon_id')
      .nullable()
      .references('id')
      .inTable('icons')
      .onDelete('CASCADE')
    table
      .integer('banner_placement_id')
      .notNullable()
      .references('id')
      .inTable('banner_placements')
      .onDelete('CASCADE')
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
  //#endregion
}

export const down = async (knex: Knex) => {
  await knex.schema.dropTable('product_discounts')
  await knex.schema.dropTable('products')
  await knex.schema.dropTable('product_base_attribute_values')
  await knex.schema.dropTable('product_base_attributes')
  await knex.schema.dropTable('product_base_categories')
  await knex.schema.dropTable('products_base')
  await knex.schema.dropTable('galleries')
  await knex.schema.dropTable('gallery_images')
  await knex.schema.dropTable('colors')
  await knex.schema.dropTable('categories')
  await knex.schema.dropTable('category_attributes')
  await knex.schema.dropTable('attribute_types')
  await knex.schema.dropTable('attributes')
  await knex.schema.dropTable('discounts')
  await knex.schema.dropTable('products_discounts')
  await knex.schema.dropTable('banners')
  await knex.schema.dropTable('banner_placements')
  await knex.schema.dropTable('banner_views')
  await knex.schema.dropTable('images')
  await knex.schema.dropTable('products_colors')
  await knex.schema.dropTable('attribute_dictionary_values')
}
