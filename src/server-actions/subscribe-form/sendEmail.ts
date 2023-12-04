'use server'

import * as yup from 'yup'
import { ServerActionResponse } from '../types'
import { ServerActionResponseCodes } from '../constants'
import { validationSchema } from './vaidationSchema'

export async function sendEmail(
  _: unknown,
  data: FormData,
): Promise<ServerActionResponse> {
  console.log(data.get('email'))
  try {
    await validationSchema.validate({
      email: data.get('email') as string,
    })

    return { code: ServerActionResponseCodes.Success, success: true }
  } catch (e) {
    const { message } = e as yup.ValidationError

    return {
      message,
      code: ServerActionResponseCodes.BadRequest,
      success: false,
    }
  }
}
