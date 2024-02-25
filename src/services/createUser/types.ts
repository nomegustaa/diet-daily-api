import { IMeal } from '../registerMeal/types'

export interface IUser {
  name: string
  lastName: string
  phone: string
  email: string
  password: string
}

export type IUpdateMeal = Pick<IMeal, 'id'>
