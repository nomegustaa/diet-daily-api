import { FastifyReply, FastifyRequest } from 'fastify'
import { updateMealBodySchema, paramsMealSchema } from './updateMealSchema'
import helpersGetAuthorization from '../../helpers/getAuthorization'
import serviceGetMealById from '../../services/getMealById/getMealById'
import serviceUpdateMeal from '../../services/updateMeal/updateMeal'
import helpersCheckUserToken from '../../helpers/checkUserToken'

const updateMeal = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = helpersGetAuthorization.getAuthorization(request)

    const { id } = helpersCheckUserToken.checkUserToken(token, reply)

    const { idMeal } = paramsMealSchema.parse(request.params)

    const [meal] = await serviceGetMealById.getMealById(id, idMeal)

    const {
      name_snack: nameSnack,
      description_snack: descriptionSnack,
      isInDiet: isInDietMeal,
    } = meal

    const { newNameMeal, newDescriptionMeal, newIsInDiet } =
      updateMealBodySchema.parse(request.body)

    const nameMeal = newNameMeal || nameSnack
    const descriptionMeal = newDescriptionMeal || descriptionSnack
    const isInDiet = isInDietMeal || newIsInDiet

    await serviceUpdateMeal.updateMeal({
      nameMeal,
      descriptionMeal,
      isInDiet,
      idMeal,
    })

    reply.status(200).send({ success: 'refeição criada com sucesso' })
  } catch (e) {
    console.log(e)
    reply.status(500).send({ error: 'Erro ao criar usuário' })
  }
}

export default { updateMeal }
