import { IMeal } from '../registerMeal/types'

export interface IUpdateMeal extends Omit<IMeal, 'id'> {
  idMeal: string
}
