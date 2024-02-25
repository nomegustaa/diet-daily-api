import { FastifyRequest } from 'fastify'
import { z } from 'zod'

export const getAuthorization = (request: FastifyRequest) => {
  const tokenUserSchema = z.object({
    authorization: z.string(),
  })

  const { authorization } = tokenUserSchema.parse(request.headers)

  const token = authorization.split(' ')[1]

  return token
}

export default { getAuthorization }
