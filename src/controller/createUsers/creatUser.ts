import { FastifyReply, FastifyRequest } from 'fastify'
import { env } from '../../config/env'
import { createUserBodySchema } from './createUserSchema'
import serviceGetUsers from '../../services/getUsers/getUsers'
import serviceCreateUser from '../../services/createUser/creatUser'
import bycript from 'bcrypt'
import jwt from 'jsonwebtoken'

const creatUser = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { name, lastName, phone, email, password } =
      createUserBodySchema.parse(request.body)

    const users = await serviceGetUsers.getUsers()

    const checkExistingEmail = users.some((user) => user.email_user === email)

    if (checkExistingEmail) {
      return reply
        .status(400)
        .send({ message: 'Já existe um usuário com este email' })
    }

    const passwordHash = await bycript.hash(password, env.BCRYPT_AMOUNT)

    const [response] = await serviceCreateUser.creatUser({
      name,
      lastName,
      phone,
      email,
      password: passwordHash,
    })

    const { id } = response

    const token = jwt.sign({ id }, env.SECRET_KEY, {
      expiresIn: '1h',
    })

    return reply.status(201).send({ token })
  } catch (e) {
    reply.status(500).send({ error: 'Erro ao criar usuário' })
  }
}

export default { creatUser }
