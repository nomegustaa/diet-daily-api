import { FastifyReply, FastifyRequest } from 'fastify'
import helpersGetAuthorization from '../../helpers/getAuthorization'
import helpersCheckUserToken from '../../helpers/checkUserToken'
import serviceGetMeal from '../../services/getMeal/getMeal'

const statisticsMeals = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const token = helpersGetAuthorization.getAuthorization(request)

    const { id } = helpersCheckUserToken.checkUserToken(token, reply)

    const meals = await serviceGetMeal.getMeal(id)

    const accountTotal = meals.length
    let isInDietTrue = 0
    let isInDietFalse = 0
    let sequencieDiet = 0
    let maxSequencieDiet = 0

    meals.forEach((item) => {
      if (item.isInDiet === true) {
        isInDietTrue++
        sequencieDiet++
        maxSequencieDiet = Math.max(maxSequencieDiet, sequencieDiet)
      } else {
        isInDietFalse++
        sequencieDiet = 0
      }
    })

    const resultStatics = {
      statics: { accountTotal, isInDietTrue, isInDietFalse, maxSequencieDiet },
    }

    return reply.status(200).send(resultStatics)
  } catch (e) {
    console.log(e)
  }
}

export default { statisticsMeals }
