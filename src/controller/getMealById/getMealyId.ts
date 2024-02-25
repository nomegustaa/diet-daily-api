import { FastifyReply, FastifyRequest } from 'fastify'
import { paramsMealSchema } from '../updateMeal/updateMealSchema'
import helpersGetAuthorization from '../../helpers/getAuthorization'
import helpersCheckUserToken from '../../helpers/checkUserToken'
import serviceGetMeal from '../../services/getMealById/getMealById'
import helpersFormatDate from '../../helpers/formatDate'

const getMealById = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = helpersGetAuthorization.getAuthorization(request)

    const { id } = helpersCheckUserToken.checkUserToken(token, reply)

    const { idMeal } = paramsMealSchema.parse(request.params)

    const responseMealById = await serviceGetMeal.getMealById(id, idMeal)

    const formatDateResponseMeals =
      await helpersFormatDate.formatDate(responseMealById)

    return reply.status(200).send(formatDateResponseMeals)
  } catch (e) {
    reply.status(500).send({ error: 'Erro ao buscar refeição' })
  }
}

export default { getMealById }
