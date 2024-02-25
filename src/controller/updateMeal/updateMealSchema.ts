import { z } from 'zod'

export const updateMealBodySchema = z.object({
  newNameMeal: z.string(),
  newDescriptionMeal: z.string(),
  newIsInDiet: z.boolean(),
})

export const paramsMealSchema = z.object({
  idMeal: z.string(),
})
