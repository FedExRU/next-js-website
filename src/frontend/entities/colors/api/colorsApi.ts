import { API_ROUTES } from '@common/api'
import { IColorContract, IRequestColorsContract } from '@common/interfaces'
import { IResponseRowsContract } from '@common/interfaces/common'

import { axios } from '../../../shared/api'

export class ColorsApi {
  static readonly get = async (filters: IRequestColorsContract = {}) => {
    const data = await axios.get<IResponseRowsContract<IColorContract>>(
      `${API_ROUTES.COLORS}?${new URLSearchParams({
        ...filters,
        ...(filters.orderBy
          ? {
              orderByDirection: filters.orderBy?.direction,
              orderByField: filters.orderBy?.field,
            }
          : {}),
      } as unknown as Record<string, string>)}`,
    )

    return data
  }
}
