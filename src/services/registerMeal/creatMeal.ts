import connection from '../../connections/connectionsDb'
import { IMeal } from './types'

const creatMeal = async ({
  nameMeal,
  descriptionMeal,
  isInDiet,
  id,
}: IMeal) => {
  try {
    await connection.query(`
      INSERT INTO daily_diet_snack_users 
        (name_snack, description_snack, date_snack, isInDiet, id) 
      VALUES('${nameMeal}', '${descriptionMeal}', GETDATE(), '${isInDiet}', '${id}')
    `)
  } catch (e) {
    console.log(e)
    throw new Error('failed register meal in db')
  }
}

export default { creatMeal }
