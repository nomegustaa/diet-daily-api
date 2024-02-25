import connection from '../../connections/connectionsDb'
import { IMeal } from './types'

const getMeal = async (idUser: string) => {
  try {
    const getMealByUser =
      await connection.query(`SELECT * FROM daily_diet_snack_users WHERE id = '${idUser}' ORDER BY date_snack ASC
  `)
    return getMealByUser[0] as IMeal[]
  } catch (e) {
    console.log(e)
    throw new Error('failed acess db')
  }
}

export default { getMeal }
