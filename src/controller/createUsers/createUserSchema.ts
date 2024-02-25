import { z } from 'zod'

export const createUserBodySchema = z.object({
  name: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string(),
  password: z.string(),
})
