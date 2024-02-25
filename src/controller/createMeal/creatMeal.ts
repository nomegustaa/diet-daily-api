import { FastifyReply, FastifyRequest } from 'fastify'
import { creatMealBodySchema } from './creatMealSchema'
import helpersGetAuthorization from '../../helpers/getAuthorization'
import helpersCheckUserToken from '../../helpers/checkUserToken'
import serviceCreatMeal from '../../services/registerMeal/creatMeal'

const creatMeal = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = helpersGetAuthorization.getAuthorization(request)

    console.log(token)

    const { id } = helpersCheckUserToken.checkUserToken(token, reply)

    const { nameMeal, descriptionMeal, isInDiet } = creatMealBodySchema.parse(
      request.body,
    )

    if (!nameMeal || !descriptionMeal) {
      return reply
        .status(401)
        .send({ message: 'Faltando parametros ou parametro inválido' })
    }

    await serviceCreatMeal.creatMeal({
      nameMeal,
      descriptionMeal,
      isInDiet,
      id,
    })

    reply.status(201).send({ success: 'refeição criada com sucesso' })
  } catch (e) {
    console.log(e)
    return reply.status(401).send({ message: 'Token inválido' })
  }
}

export default { creatMeal }
