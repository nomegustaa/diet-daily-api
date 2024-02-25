import connection from '../../connections/connectionsDb'
import { IMeal } from '../getMeal/types'

const getMealById = async (idUser: string, idMeal: string) => {
  try {
    const getMealById =
      await connection.query(`SELECT * FROM daily_diet_snack_users WHERE id = '${idUser}' and id_snack = '${idMeal}'
  `)
    return getMealById[0] as IMeal[]
  } catch (e) {
    console.log(e)
    throw new Error('failed acess db')
  }
}

export default { getMealById }
