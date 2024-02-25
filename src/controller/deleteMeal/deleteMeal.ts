import { FastifyReply, FastifyRequest } from 'fastify'
import { paramsMealSchema } from '../updateMeal/updateMealSchema'
import helpersGetAuthorization from '../../helpers/getAuthorization'
import helpersCheckUserToken from '../../helpers/checkUserToken'
import serviceGetMealById from '../../services/getMealById/getMealById'
import serviceDeleteMeal from '../../services/deleteMeal/deleteMeal'

const deleteMeal = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = helpersGetAuthorization.getAuthorization(request)

    const { id } = helpersCheckUserToken.checkUserToken(token, reply)

    const { idMeal } = paramsMealSchema.parse(request.params)

    const [meal] = await serviceGetMealById.getMealById(id, idMeal)

    const { id_snack: idSnack } = meal

    await serviceDeleteMeal.deleteMeal(idSnack, id)

    reply.status(200).send({ success: 'refeição deletada com sucesso' })
  } catch (e) {
    reply.status(500).send({ error: 'Erro ao deletar usuário' })
  }
}

export default { deleteMeal }
