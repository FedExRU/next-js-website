'use server'

import * as yup from 'yup'
import { ServerActionResponseCodes } from '../constants'
import { SubscribeResponse } from './types'
import { validationSchema } from './validationSchema'

export async function subscribe(
  initialState: SubscribeResponse,
  data: FormData,
): Promise<SubscribeResponse> {
  try {
    await validationSchema.validate({
      email: data.get('email') as string,
    })

    return {
      code: ServerActionResponseCodes.Success,
      success: true,
      message: 'Success subscribe',
    }
  } catch (e) {
    const { message } = e as yup.ValidationError

    return {
      message,
      code: ServerActionResponseCodes.BadRequest,
      success: false,
    }
  }
}
