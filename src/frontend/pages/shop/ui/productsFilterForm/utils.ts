import { ProductCategoriesFilter } from './productCategoriesFilter'
import { ProductColorFilter } from './productColorFilter'
import { BaseFilterFieldProps, BuildFormArgs, FilterFormField } from './types'

export const buildForm = <
  TComponentProps extends BaseFilterFieldProps = BaseFilterFieldProps,
>({
  attributeDictionaryValues,
  attributes,
  categories,
  colors,
  handleChange,
}: BuildFormArgs) => {
  const baseFormFields: FilterFormField<TComponentProps>[] = [
    {
      attributeType: 'DICTIONARY',
      Component: ProductCategoriesFilter,
      id: 'categories',
      label: 'Categories',
      name: 'categoryId',
      onChange: handleChange,
      options: categories.map(({ id, name }) => ({
        id,
        value: name,
      })),
    },
    {
      attributeType: 'NUMBER',
      id: 'price',
      label: 'Price',
      name: ['price[0]', 'price[1]'],
      onChange: handleChange,
    },
    {
      attributeType: 'DICTIONARY',
      Component: ProductColorFilter,
      id: 'color',
      label: 'Color',
      name: 'colorId',
      onChange: handleChange,
      options: colors.map(({ id, name, value }) => ({
        id,
        name,
        value,
      })),
    },
  ]

  attributes.forEach(({ attributeType, code, id, name }) => {
    const baseFormProps: Pick<
      FilterFormField,
      'attributeType' | 'label' | 'onChange'
    > = {
      attributeType,
      label: name,
      onChange: handleChange,
    }
    switch (attributeType) {
      case 'DICTIONARY':
        baseFormFields.push({
          ...baseFormProps,
          id: code,
          name: `${code}Id`,
          options: Object.values(attributeDictionaryValues[id]),
        })
        break
      case 'NUMBER':
        baseFormFields.push({
          ...baseFormProps,
          id: code,
          name: [`${code}[0]`, `${code}[1]`],
        })

        break
      default:
        baseFormFields.push({
          ...baseFormProps,
          id: code,
          name: code,
        })
    }
  })

  return baseFormFields
}
