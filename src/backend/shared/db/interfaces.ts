export interface IAttribute {
  code: string
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  name: string
  updated_at: string
  updated_by: number
}

export interface IAttributeDictionaryValue {
  attribute_id: number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  updated_at: string
  updated_by: number
  value: null | string
}

export interface IAttributeType {
  attribute_id: string
  code: string
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  updated_at: string
  updated_by: number
}

export interface IBanner {
  active: boolean
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  image: string
  name: string
  position: number
  updated_at: string
  updated_by: number
}

export interface IBanner {
  active: boolean
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  image: string
  name: string
  position: number
  updated_at: string
  updated_by: number
}

export interface IBannerCategory {
  banner_id: number
  category_id: number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  updated_at: string
  updated_by: number
}

export interface IBannerCategory {
  banner_id: number
  category_id: number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  updated_at: string
  updated_by: number
}

export interface IBannerImage {
  banner_id: number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  image: string
  updated_at: string
  updated_by: number
}

export interface IBannerImage {
  banner_id: number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  image: string
  updated_at: string
  updated_by: number
}

export interface ICategory {
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  name: string
  updated_at: string
  updated_by: number
}

export interface ICategoryAttribute {
  attribute_id: number
  category_id: number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  updated_at: string
  updated_by: number
}

export interface IColor {
  code: string
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  name: string
  updated_at: string
  updated_by: number
  value: string
}

export interface IColorImage {
  color_id: number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  image: string
  updated_at: string
  updated_by: number
}

export interface IGallery {
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  name: string
  updated_at: string
  updated_by: number
}

export interface IGalleryImage {
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  gallery_id: number
  id: number
  image: string
  updated_at: string
  updated_by: number
}

export interface IImage {
  created_at: string
  created_by: number
  deleted_at: null | string
  description: null | string
  disabled_at: null | string
  extension: string
  id: number
  image: string
  image_large: null | string
  image_medium: null | string
  image_small: null | string
  name: string
  size: number
  updated_at: string
  updated_by: number
}

export interface IPage {
  code: string
  created_at: null | string
  created_by: number
  deleted_at: null | string
  description: null | string
  disabled_at: null | string
  id: number
  metaDescription: null | string
  metaKeywords: null | string
  metaTitle: null | string
  name: string
  parent_id: null | number
  path: string
  short_name: null | string
  updated_at: null | string
  updated_by: null | string
}

export interface IProduct {
  color_id: number
  color_image_id: null | number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  discount_percentage: null | number
  discount_price: null | number
  gallery_id: null | number
  id: number
  image: string
  image_large: null | string
  image_medium: null | string
  image_small: null | string
  name: string
  new: boolean
  price: number
  product_base_id: number
  quantity: number
  sku: string
  slug: string
  updated_at: string
  updated_by: number
}

export interface IProductBase {
  additional_info: null | string
  code: string
  created_at: string
  created_by: number
  deleted_at: null | string
  description: null | string
  disabled_at: null | string
  id: number
  name: string
  updated_at: string
  updated_by: number
}

export interface IProductBaseAttributes {
  category_attribute_id: number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  product_base_id: number
  updated_at: string
  updated_by: number
}

export interface IProductBaseAttributeValues {
  attribute_dictionary_value_id: null | number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  product_base_attribute_id: number
  updated_at: string
  updated_by: number
  value: null | string
}

export interface IProductBaseCategories {
  category_id: number
  created_at: string
  created_by: number
  deleted_at: null | string
  disabled_at: null | string
  id: number
  product_base_id: number
  updated_at: string
  updated_by: number
}
