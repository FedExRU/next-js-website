# SQL Queries For Fetching Data

## Product

### Select All Attribute Values For Product By ID

```sql
select 
 products.name as product_name, 
 attributes.name as attribute_name, 
 COALESCE(attribute_dictionary_values.value, product_base_attribute_values.value) as value 
from product_base_attribute_values
left join 
 product_base_attributes on product_base_attribute_values.product_base_attribute_id = product_base_attributes.id and product_base_attribute_values.disabled_at is null and product_base_attribute_values.deleted_at is null
left join 
 products on products.product_base_id = product_base_attributes.product_base_id and product_base_attributes.disabled_at is null and product_base_attributes.deleted_at is null
left join 
 category_attributes on category_attributes.id = product_base_attributes.category_attribute_id and category_attributes.disabled_at is null and category_attributes.deleted_at is null
left join 
 attribute_dictionary_values on attribute_dictionary_values.id = product_base_attribute_values.attribute_dictionary_value_id and attribute_dictionary_values.disabled_at is null and attribute_dictionary_values.deleted_at is null
left join 
 attributes on category_attributes.attribute_id = attributes.id and attributes.disabled_at is null and attributes.deleted_at is null
where products.id = 1 and products.disabled_at is null and products.deleted_at is null
```

### Select Main Data For Product By ID

```sql
select 
  products.id as id,
  products.name as name,
  products.sku as sku,
  products_base.description as description,
  products_base.additional_info as additional_info,
  products.quantity as quantity,
  products.new as new,
  products.color_id as color_id
from products
left join products_base on products.product_base_id = products_base.id and products_base.deleted_at is null and products_base.disabled_at is null 
where products.id = 1 and products.disabled_at is null and products.deleted_at is null
```

### Select All Available Colors For Product By Product Base ID

```sql
select 
  colors.id,
  colors.code,
  colors.name,
  colors.value
from products
left join colors on products.color_id = colors.id and colors.disabled_at is null and colors.deleted_at is null
where products.product_base_id = 1 and products.disabled_at is null and products.deleted_at is null
```

### Select All Prices With Discounts For Product By ID

```sql
select
  products.price as price,
  products_discounts.id as discount_id,
  products_discounts.price as discount_price,
  discounts.percentage as percentage,
  discounts.name as discount_name
from products_discounts
left join discounts on discounts.id = products_discounts.discount_id and products_discounts.disabled_at is null and products_discounts.deleted_at is null
right join products on products.id = products_discounts.product_id
where products.id = 1 and products.disabled_at is null and products.deleted_at is null#
```

### Select All Images For Product By ID

```sql
select 
  images.id as id,
  images.name as image_name,
  images.image as image,
  images.image_large as image_large,
  images.image_medium as image_medium,
  images.image_small as image_small,
  gallery_images.primary_image as primary_image,
  gallery_images.gallery_id as gallery_id
from images
left join gallery_images on gallery_images.image_id = images.id and images.deleted_at is null and images.disabled_at is null
left join products on products.gallery_id = gallery_images.gallery_id and gallery_images.deleted_at is null and gallery_images.disabled_at is null
where products.id = 1 and products.disabled_at is null and products.deleted_at is null
```

### Select All Products

```sql
select 
  products.id as id,
  products.name as name,
  products.price as price,
  products_discounts.price as discount_price,
  discounts.percentage  as discount_percentage,
  products.new as new,
  images.image as image,
  images.image_small as image_small,
  images.image_medium as image_medium,
  images.image_large as image_large
from products
left join products_discounts on products_discounts.product_id = products.id and products_discounts.deleted_at is null and products_discounts.disabled_at  is null 
left join discounts on products_discounts.discount_id  = discounts.id and discounts.deleted_at is null and discounts.disabled_at  is null 
left join gallery_images on gallery_images.gallery_id = products.gallery_id and gallery_images.deleted_at is null and gallery_images.disabled_at is null and gallery_images.primary_image is true
left join images on gallery_images.image_id = images.id and images.deleted_at is null and images.disabled_at  is null 
where products.disabled_at is null and products.deleted_at is null
order by products.id desc
```

### Select All Attributes

```sql
select distinct
  attributes.id,
  attributes.name,
  attribute_types.code as attribute_type
from attributes
left join attribute_types on attribute_types.id = attributes.attribute_type_id and attribute_types.deleted_at is null and attribute_types.disabled_at is null
left join category_attributes on category_attributes.attribute_id = attributes.id and category_attributes.deleted_at is null and category_attributes.disabled_at is null
right join product_base_attributes on product_base_attributes.category_attribute_id  = category_attributes.id and product_base_attributes.deleted_at is null and product_base_attributes.disabled_at is null
where attributes.deleted_at is null and attributes.disabled_at is null
order by attributes.id desc
```

### Select All Category Dictionary Values

```sql
select 
  attribute_dictionary_values.id,
  attribute_dictionary_values.attribute_id,
  attribute_dictionary_values.value
from attribute_dictionary_values
left join attributes on attributes.id = attribute_dictionary_values.attribute_id and attributes.deleted_at is null and attributes.disabled_at is null
where attribute_dictionary_values.deleted_at is null and attribute_dictionary_values.disabled_at is null
```
