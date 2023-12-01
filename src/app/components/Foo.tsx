'use client'

import SubscribeForm from 'components/client/SubscribeForm'

export const Foo = () => (
  <SubscribeForm onSubmit={({ email }) => alert(email)} />
)
