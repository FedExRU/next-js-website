import { IColorContract, IResponseRowsColorsContract } from '@common/interfaces'
import { useGetColorsInfiniteQuery } from '@frontend/entities/colors'
import { useDebounce } from '@frontend/shared/lib'
import { Fetcher, Typography } from '@frontend/shared/ui'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import InputLabel from '@mui/material/InputLabel'
import { AxiosResponse } from 'axios'
import React from 'react'

import { useFormContext } from '../../contexts'
import { ProductColor } from './productColor'
import { getStyles } from './styles'
import { ProductColorFilterProps } from './types'

const { styles } = getStyles()

export const ProductColorFilter: React.FC<ProductColorFilterProps> = ({
  name,
  onChange,
  options = [],
  value,
}) => {
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useGetColorsInfiniteQuery(
      {},
      {
        enabled: false,
        initialData: {
          pageParams: [0],
          pages: [
            {
              data: {
                data: {
                  rows: options,
                  total: undefined as unknown as number,
                },
              } as IResponseRowsColorsContract,
            } as AxiosResponse<IResponseRowsColorsContract>,
          ],
        },
        initialPageParam: 1,
      },
    )

  const { handleSubmit } = useFormContext()
  const handleSubmitDebounced = useDebounce(handleSubmit)

  const handleFetchNextPage = (event: React.MouseEvent) => {
    event.preventDefault()

    fetchNextPage()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSubmitDebounced()
    onChange(event)
  }

  const computedColors = React.useMemo(
    () =>
      data?.pages.reduce((accumulator, currentValue) => {
        currentValue.data.data.rows.map(color => {
          accumulator.push(color)
        })
        return accumulator
      }, [] as IColorContract[]) || [],
    [data?.pages.length],
  )

  if (computedColors.length === 0) return null

  return (
    <Box component="fieldset" sx={styles.fieldSet}>
      <InputLabel
        component="legend"
        focused
        size="small"
        sx={styles.inputLabel}
      >
        Color
      </InputLabel>
      <FormGroup sx={styles.formGroup}>
        {computedColors.map(({ id, name: colorName, value: colorValue }) => (
          <FormControlLabel
            checked={!!value?.includes(String(id))}
            control={<Checkbox />}
            key={id}
            label={
              <Box component="span" sx={styles.colorBlock}>
                <ProductColor value={colorValue} />
                <Typography
                  color="textSecondary"
                  id={String(id)}
                  variant="body2Semi"
                >
                  {colorName}
                </Typography>
              </Box>
            }
            name={name}
            onChange={handleChange as (event: React.SyntheticEvent) => void}
            sx={styles.formControlLabel}
            value={String(id)}
          />
        ))}
        <Fetcher
          height={26}
          isLoading={isFetching}
          isVisible={hasNextPage && !isFetching}
          onClick={handleFetchNextPage}
          text="Get more colors"
        />
      </FormGroup>
    </Box>
  )
}
