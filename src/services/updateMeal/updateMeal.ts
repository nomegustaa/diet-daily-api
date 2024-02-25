import connection from '../../connections/connectionsDb'
import { IUpdateMeal } from './types'

const updateMeal = async ({
  nameMeal,
  descriptionMeal,
  isInDiet,
  idMeal,
}: IUpdateMeal) => {
  try {
    await connection.query(`
      UPDATE daily_diet_snack_users 
      SET name_snack = '${nameMeal}', description_snack = '${descriptionMeal}', date_snack = GETDATE(), isInDiet = '${isInDiet}' 
      WHERE id_snack = '${idMeal}'
    `)
  } catch (e) {
    console.log(e)
    throw new Error('failed update meal in db')
  }
}

export default { updateMeal }
