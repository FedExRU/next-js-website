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
  // #region Insert Kitchen Table Brown
  const service = new SharpImageService(
    resolve(__dirname, './assets/apex_closet_brown_1.jpg'),
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
    .input(resolve(__dirname, './assets/apex_closet_brown_2.jpeg'))
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
    .input(resolve(__dirname, './assets/apex_closet_brown_3.jpeg'))
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
    .input(resolve(__dirname, './assets/apex_closet_brown_4.jpeg'))
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
          'The Apex Closet offers a sleek and efficient storage solution for any room. Designed with soft-close doors, the Apex helps you organize your belongings with ease.',
        extension: path.parse(image01).ext,
        image: image01,
        image_large: image01Large,
        image_medium: image01Medium,
        image_small: image01Small,
        name: 'Closet Apex Brown 1',
        size: image01Size,
        updated_by: 1,
      },
      {
        created_by: 1,
        description:
          'The Apex Closet offers a sleek and efficient storage solution for any room. Designed with soft-close doors, the Apex helps you organize your belongings with ease.',
        extension: path.parse(image02).ext,
        image: image02,
        image_large: image02Large,
        image_medium: image02Medium,
        image_small: image02Small,
        name: 'Closet Apex Brown 2',
        size: image02Size,
        updated_by: 1,
      },
      {
        created_by: 1,
        description:
          'The Apex Closet offers a sleek and efficient storage solution for any room. Designed with soft-close doors, the Apex helps you organize your belongings with ease.',
        extension: path.parse(image03).ext,
        image: image03,
        image_large: image03Large,
        image_medium: image03Medium,
        image_small: image03Small,
        name: 'Closet Apex Brown 3',
        size: image03Size,
        updated_by: 1,
      },
      {
        created_by: 1,
        description:
          'The Apex Closet offers a sleek and efficient storage solution for any room. Designed with soft-close doors, the Apex helps you organize your belongings with ease.',
        extension: path.parse(image04).ext,
        image: image04,
        image_large: image04Large,
        image_medium: image04Medium,
        image_small: image04Small,
        name: 'Closet Apex Brown 4',
        size: image04Size,
        updated_by: 1,
      },
    ])
    .into('images')

  await knex
    .insert([
      {
        code: 'CLOSET_APEX_BROWN',
        created_by: 1,
        description:
          'The Apex Closet offers a sleek and efficient storage solution for any room. Designed with soft-close doors, the Apex helps you organize your belongings with ease.',
        name: 'Closet Apex Brown',
        updated_by: 1,
      },
    ])
    .into('galleries')

  await knex
    .insert([
      {
        created_by: 1,
        gallery_id: 7,
        image_id: 25,
        primary_image: true,
        updated_by: 1,
      },
      {
        created_by: 1,
        gallery_id: 7,
        image_id: 26,
        updated_by: 1,
      },
      {
        created_by: 1,
        gallery_id: 7,
        image_id: 27,
        updated_by: 1,
      },
      {
        created_by: 1,
        gallery_id: 7,
        image_id: 28,
        updated_by: 1,
      },
    ])
    .into('gallery_images')

  await knex
    .insert([
      {
        color_id: 8,
        created_by: 1,
        gallery_id: 7,
        name: 'Closet Apex Brown',
        new: false,
        price: 550,
        product_base_id: 3,
        quantity: 50,
        sku: '1058',
        slug: 'closet-apex-brown',
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
