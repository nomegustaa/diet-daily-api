import jwt from 'jsonwebtoken'
import { env } from '../config/env'
import { FastifyReply } from 'fastify'

interface ITokenUser {
  id: string
  iat: number
  exp: number
}

const checkUserToken = (token: string, reply: FastifyReply) => {
  try {
    const user = jwt.verify(token, env.SECRET_KEY)

    const { id } = user as ITokenUser

    return { id }
  } catch (e) {
    reply.status(403).send({ message: 'token inválido' })

    throw e
  }
}

export default { checkUserToken }
