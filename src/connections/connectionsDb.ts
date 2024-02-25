import { Sequelize } from 'sequelize'
import { env } from '../config/env'

const connection = new Sequelize(
  env.DB_DATABASE,
  env.DB_USER,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    dialect: 'mssql',
  },
)

export default connection
