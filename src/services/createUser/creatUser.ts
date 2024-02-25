import connection from '../../connections/connectionsDb'
import { IUpdateMeal, IUser } from './types'

const creatUser = async ({ name, lastName, phone, email, password }: IUser) => {
  try {
    const [userId] = await connection.query(`
      DECLARE @UserID TABLE (ID uniqueidentifier);

      INSERT INTO daily_diet_users (name_user, lastname_user, phone_user, email_user, password_user)

      OUTPUT INSERTED.id INTO @UserID(ID)

      VALUES ('${name}', '${lastName}', '${phone}', '${email}', '${password}')

      SELECT id FROM @UserID;
    `)
    return userId as IUpdateMeal[]
  } catch (e) {
    console.log(e)
    throw new Error('failed acess db')
  }
}
export default { creatUser }
