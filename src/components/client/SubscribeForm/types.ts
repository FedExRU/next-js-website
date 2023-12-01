export type SubscribeFormData = {
  email: string
}

export type SubscribeFormProps = {
  onSubmit?: (data: SubscribeFormData) => void
  disabled?: boolean
}
