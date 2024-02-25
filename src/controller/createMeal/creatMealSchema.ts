import { z } from 'zod'

export const creatMealBodySchema = z.object({
  nameMeal: z.string(),
  descriptionMeal: z.string(),
  isInDiet: z.boolean(),
})
