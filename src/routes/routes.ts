import { FastifyInstance } from 'fastify'
import controllerCreatUser from '../controller/createUsers/creatUser'
import controllerLoginUser from '../controller/loginUser/loginUser'
import controllerCreatMeal from '../controller/createMeal/creatMeal'
import controlllerUpdateMeal from '../controller/updateMeal/updateMeal'
import controllerGetMeal from '../controller/getMeal/getMeal'
import controllerDeleteMeal from '../controller/deleteMeal/deleteMeal'
import controllerGetMealyId from '../controller/getMealById/getMealyId'
import controllerStatisticsMeal from '../controller/statisticsMeals/statisticsMeals'
import middleware from '../middleware/middleware'

const Routes = async (fastify: FastifyInstance) => {
  fastify.addHook('onRequest', middleware.middlewareAuth)

  fastify.post('/creatuser', controllerCreatUser.creatUser)

  fastify.post('/loginuser', controllerLoginUser.loginUser)

  fastify.post('/creatmeal', controllerCreatMeal.creatMeal)

  fastify.put('/updatemeal/:idMeal', controlllerUpdateMeal.updateMeal)

  fastify.get('/getmeal', controllerGetMeal.getMeal)

  fastify.get('/getmealbyid/:idMeal', controllerGetMealyId.getMealById)

  fastify.get('/statisticsmeals', controllerStatisticsMeal.statisticsMeals)

  fastify.delete('/deletemeal/:idMeal', controllerDeleteMeal.deleteMeal)
}
export default Routes
