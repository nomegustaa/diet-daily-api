import { FastifyReply, FastifyRequest } from 'fastify'
import { env } from '../../config/env'
import { loginBodySchema } from './loginSchema'
import bycript from 'bcrypt'
import serviceGetUsers from '../../services/getUsers/getUsers'
import jwt from 'jsonwebtoken'

const loginUser = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { email, password } = loginBodySchema.parse(request.body)

    const users = await serviceGetUsers.getUsers()

    const checkExistingUser = users.find((user) => user.email_user === email)

    if (!checkExistingUser) {
      reply.status(401).send({ message: 'email não cadastrado' })
    }

    if (checkExistingUser) {
      const checkPassword = await bycript.compare(
        password,
        checkExistingUser.password_user,
      )

      if (!checkPassword) {
        reply.status(401).send({ message: 'senha incorreta' })
      }

      const token = jwt.sign({ id: checkExistingUser.id }, env.SECRET_KEY, {
        expiresIn: '1h',
      })

      reply.status(200).send({ token })
    }
  } catch (e) {
    reply.status(500).send({ error: 'Erro ao logar com usuário' })
  }
}
export default { loginUser }
