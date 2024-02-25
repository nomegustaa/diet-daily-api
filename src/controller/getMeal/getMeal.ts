import { FastifyReply, FastifyRequest } from 'fastify'
import helpersGetAuthorization from '../../helpers/getAuthorization'
import helpersCheckUserToken from '../../helpers/checkUserToken'
import serviceGetMeal from '../../services/getMeal/getMeal'
import helpersFormatDate from '../../helpers/formatDate'

const getMeal = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = helpersGetAuthorization.getAuthorization(request)

    const { id } = helpersCheckUserToken.checkUserToken(token, reply)

    const responseMeals = await serviceGetMeal.getMeal(id)

    const formatDateResponseMeals =
      await helpersFormatDate.formatDate(responseMeals)

    return reply.status(200).send(formatDateResponseMeals)
  } catch (e) {
    reply.status(500).send({ error: 'Erro ao buscar refeição' })
  }
}

export default { getMeal }
