'use server'

import * as yup from 'yup'

import { SubscribeFormStatus } from './constants'
import { SubscribeResponse } from './types'
import { validationSchema } from './validationSchema'

/**
 * Subscribe form action with reset state.
 *
 * @see https://www.nico.fyi/blog/reset-state-from-react-useactionstate
 */
export async function subscribe(
  _: SubscribeResponse,
  data: FormData,
): Promise<SubscribeResponse> {
  const email = data.get('email') as string

  try {
    await validationSchema.validate({
      email,
    })

    return {
      email: '',
      message: '',
      status: SubscribeFormStatus.Success,
      success: true,
    }
  } catch (e) {
    const { message } = e as yup.ValidationError

    return {
      email,
      message,
      status: SubscribeFormStatus.Error,
      success: false,
    }
  }
}
