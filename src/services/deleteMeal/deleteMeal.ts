import connection from '../../connections/connectionsDb'

const deleteMeal = async (idMeal: string, idUser: string) => {
  try {
    await connection.query(`
      DELETE FROM daily_diet_snack_users WHERE id_snack = '${idMeal}' and id = '${idUser}'
    `)
  } catch (e) {
    console.log(e)
    throw new Error('failed acess db')
  }
}

export default { deleteMeal }
