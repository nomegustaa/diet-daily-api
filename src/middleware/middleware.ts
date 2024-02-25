import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const middlewareAuth = (
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void,
) => {
  const url = request.url

  if (url === '/loginuser' || url === '/creatuser') {
    return next()
  }
  const tokenUserSchema = z.object({
    authorization: z.string(),
  })

  const { authorization } = tokenUserSchema.parse(request.headers)

  const token = authorization.split(' ')[1]

  if (!token) {
    return reply.status(401).send({ message: 'Token de autorização vazio' })
  }

  next()
}

export default { middlewareAuth }
