export interface Response {
  success: boolean
  data: Client[]
}

export interface Client {
  _id: string
  email: string
  name: string
  lastName: string
  birthday: string
  deleted: boolean
  createdAt: string
  updatedAt: string
  __v: number
}
