import connection from '../../connections/connectionsDb'
import { IDb } from '../../connections/types'

const getUsers = async () => {
  try {
    const getUser = await connection.query(`
    SELECT * FROM daily_diet_users
  `)
    return getUser[0] as IDb[]
  } catch (e) {
    console.log(e)
    throw new Error('failed acess db')
  }
}

export default { getUsers }
