import fastify from 'fastify'
import Routes from './routes/routes'
import { env } from './config/env'

export const app = fastify()

app.register(Routes)

app
  .listen({ port: env.DB_PORT })
  .then(() => console.log(`http server running in port ${env.DB_PORT}`))
