import type { Knex } from 'knex'

import { unlink } from 'node:fs'
import path from 'node:path'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import SharpImageService from '../../services/imageService/sharpImageService/sharpImageService.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const imagesPull: string[] = []

export const up = async (knex: Knex) => {
  // #region Insert Kitchen Table Black
  const service = new SharpImageService(
    resolve(__dirname, './assets/kitchen_table_black_1.jpg'),
  )

  await service.save()

  const image01 = service.getSavedImagePath()
  const image01Absolute = service.getSavedImagePath(true)
  const image01Size = await service.getSize()

  await service.resizeSmall().save()

  const image01Small = service.getSavedImagePath()
  const image01SmallAbsolute = service.getSavedImagePath(true)

  await service.resizeMedium().save()

  const image01Medium = service.getSavedImagePath()
  const image01MediumAbsolute = service.getSavedImagePath(true)

  await service.resizeLarge().save()

  const image01Large = service.getSavedImagePath()
  const image01LargeAbsolute = service.getSavedImagePath(true)

  await service
    .input(resolve(__dirname, './assets/kitchen_table_black_2.jpeg'))
    .save()

  const image02 = service.getSavedImagePath()
  const image02Absolute = service.getSavedImagePath(true)

  const image02Size = await service.getSize()

  await service.resizeSmall().save()

  const image02Small = service.getSavedImagePath()
  const image02SmallAbsolute = service.getSavedImagePath(true)

  await service.resizeMedium().save()

  const image02Medium = service.getSavedImagePath()
  const image02MediumAbsolute = service.getSavedImagePath(true)

  await service.resizeLarge().save()

  const image02Large = service.getSavedImagePath()
  const image02LargeAbsolute = service.getSavedImagePath(true)

  await service
    .input(resolve(__dirname, './assets/kitchen_table_black_3.jpeg'))
    .save()

  const image03 = service.getSavedImagePath()
  const image03Absolute = service.getSavedImagePath(true)

  const image03Size = await service.getSize()

  await service.resizeSmall().save()

  const image03Small = service.getSavedImagePath()
  const image03SmallAbsolute = service.getSavedImagePath(true)

  await service.resizeMedium().save()
  const image03Medium = service.getSavedImagePath()
  const image03MediumAbsolute = service.getSavedImagePath(true)

  await service.resizeLarge().save()
  const image03Large = service.getSavedImagePath()
  const image03LargeAbsolute = service.getSavedImagePath(true)

  await service
    .input(resolve(__dirname, './assets/kitchen_table_black_4.jpeg'))
    .save()

  const image04 = service.getSavedImagePath()
  const image04Absolute = service.getSavedImagePath(true)

  const image04Size = await service.getSize()

  await service.resizeSmall().save()
  const image04Small = service.getSavedImagePath()
  const image04SmallAbsolute = service.getSavedImagePath(true)

  await service.resizeMedium().save()

  const image04Medium = service.getSavedImagePath()
  const image04MediumAbsolute = service.getSavedImagePath(true)

  await service.resizeLarge().save()
  const image04Large = service.getSavedImagePath()
  const image04LargeAbsolute = service.getSavedImagePath(true)

  await knex
    .insert([
      {
        created_by: 1,
        description:
          'Bring a touch of classic sophistication to your kitchen with the Regency Kitchen Table. Featuring beautifully crafted pedestal base, the Regency offers both style and functionality for family meals and casual gatherings.',
        extension: path.parse(image01).ext,
        image: image01,
        image_large: image01Large,
        image_medium: image01Medium,
        image_small: image01Small,
        name: 'Kitchen Table Regency Black 1',
        size: image01Size,
        updated_by: 1,
      },
      {
        created_by: 1,
        description:
          'Bring a touch of classic sophistication to your kitchen with the Regency Kitchen Table. Featuring beautifully crafted pedestal base, the Regency offers both style and functionality for family meals and casual gatherings.',
        extension: path.parse(image02).ext,
        image: image02,
        image_large: image02Large,
        image_medium: image02Medium,
        image_small: image02Small,
        name: 'Kitchen Table Regency Black 2',
        size: image02Size,
        updated_by: 1,
      },
      {
        created_by: 1,
        description:
          'Bring a touch of classic sophistication to your kitchen with the Regency Kitchen Table. Featuring beautifully crafted pedestal base, the Regency offers both style and functionality for family meals and casual gatherings.',
        extension: path.parse(image03).ext,
        image: image03,
        image_large: image03Large,
        image_medium: image03Medium,
        image_small: image03Small,
        name: 'Kitchen Table Regency Black 3',
        size: image03Size,
        updated_by: 1,
      },
      {
        created_by: 1,
        description:
          'Bring a touch of classic sophistication to your kitchen with the Regency Kitchen Table. Featuring beautifully crafted pedestal base, the Regency offers both style and functionality for family meals and casual gatherings.',
        extension: path.parse(image04).ext,
        image: image04,
        image_large: image04Large,
        image_medium: image04Medium,
        image_small: image04Small,
        name: 'Kitchen Table Regency Black 4',
        size: image04Size,
        updated_by: 1,
      },
    ])
    .into('images')

  await knex
    .insert([
      {
        code: 'KITCHEN_TABLE_REGENCY_BLACK',
        created_by: 1,
        description:
          'Bring a touch of classic sophistication to your kitchen with the Regency Kitchen Table. Featuring beautifully crafted pedestal base, the Regency offers both style and functionality for family meals and casual gatherings.',
        name: 'Kitchen Table Regency Black',
        updated_by: 1,
      },
    ])
    .into('galleries')

  await knex
    .insert([
      {
        created_by: 1,
        gallery_id: 4,
        image_id: 13,
        primary_image: true,
        updated_by: 1,
      },
      {
        created_by: 1,
        gallery_id: 4,
        image_id: 14,
        updated_by: 1,
      },
      {
        created_by: 1,
        gallery_id: 4,
        image_id: 15,
        updated_by: 1,
      },
      {
        created_by: 1,
        gallery_id: 4,
        image_id: 16,
        updated_by: 1,
      },
    ])
    .into('gallery_images')

  await knex
    .insert([
      {
        additional_info:
          'Bring a touch of classic sophistication to your kitchen with the Regency Kitchen Table. Featuring beautifully crafted pedestal base, the Regency offers both style and functionality for family meals and casual gatherings.',
        code: 'KITCHEN_TABLE_REGENCY',
        created_by: 1,
        description:
          'Bring a touch of classic sophistication to your kitchen with the Regency Kitchen Table. Featuring beautifully crafted pedestal base, the Regency offers both style and functionality for family meals and casual gatherings.',
        name: 'Kitchen Table Regency',
        updated_by: 1,
      },
    ])
    .into('products_base')
  await knex
    .insert([
      {
        category_id: 1,
        created_by: 1,
        product_base_id: 2,
        updated_by: 1,
      },
    ])
    .into('product_base_categories')
  await knex
    .insert([
      {
        category_attribute_id: 8,
        created_by: 1,
        product_base_id: 2,
        updated_by: 1,
      },
      {
        category_attribute_id: 9,
        created_by: 1,
        product_base_id: 2,
        updated_by: 1,
      },
      {
        category_attribute_id: 23,
        created_by: 1,
        product_base_id: 2,
        updated_by: 1,
      },
    ])
    .into('product_base_attributes')
  await knex
    .insert([
      {
        created_by: 1,
        product_base_attribute_id: 4,
        updated_by: 1,
        value: '100',
      },
      {
        created_by: 1,
        product_base_attribute_id: 5,
        updated_by: 1,
        value: '150',
      },
      {
        attribute_dictionary_value_id: 1,
        created_by: 1,
        product_base_attribute_id: 6,
        updated_by: 1,
      },
    ])
    .into('product_base_attribute_values')

  await knex
    .insert([
      {
        color_id: 4,
        created_by: 1,
        gallery_id: 4,
        name: 'Kitchen Table Regency Black',
        new: false,
        price: 550,
        product_base_id: 2,
        quantity: 50,
        sku: '1191',
        updated_by: 1,
      },
    ])
    .into('products')
  //#endregion

  imagesPull.push(
    image01Absolute,
    image01SmallAbsolute,
    image01MediumAbsolute,
    image01LargeAbsolute,
    image02Absolute,
    image02SmallAbsolute,
    image02MediumAbsolute,
    image02LargeAbsolute,
    image03Absolute,
    image03SmallAbsolute,
    image03MediumAbsolute,
    image03LargeAbsolute,
    image04Absolute,
    image04SmallAbsolute,
    image04MediumAbsolute,
    image04LargeAbsolute,
  )
}

export const down = async (knex: Knex) => {
  await knex('products_base').truncate()
  await knex('product_base_categories').truncate()
  await knex('product_base_attributes').truncate()
  await knex('product_base_attribute_values').truncate()
  await knex('products').truncate()
  await knex('products_discounts').truncate()
  await Promise.all(
    imagesPull.map(filePath =>
      unlink(filePath, err => {
        if (err) throw err
        console.log(`${filePath} deleted`)
      }),
    ),
  )
}
