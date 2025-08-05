'use client'

import * as React from 'react'

export function useActionState<State, Payload>(
  action: (state: Awaited<State>, payload: Payload) => Promise<State> | State,
  initialState: Awaited<State>,
  permalink?: string,
): [
  state: Awaited<State>,
  dispatch: (payload: null | Payload) => void,
  isPending: boolean,
  reset: () => void,
] {
  const [state, submit, isPending] = React.useActionState(
    async (state: Awaited<State>, payload: null | Payload) => {
      if (!payload) {
        return initialState
      }
      const data = await action(state, payload)
      return data
    },
    initialState,
    permalink,
  )

  const reset = () => {
    React.startTransition(() => {
      submit(null)
    })
  }

  return [state, submit, isPending, reset]
}
