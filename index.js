const mongoose = require('mongoose')
const pkg = require('./package.json')
const router = require('./router')
const Post = require('./schemas/Post')

const root = __dirname
const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || 'localhost'

const DB = process.env['MONGO_INITDB_DATABASE'] || 'api_development'
const MONGO_URL = process.env['MONGO_URL'] || 'localhost'

let connectionString = `mongodb://${MONGO_URL}/${DB}`

const logger = require('shintech-logger')({
  environment
})

require('shintech-connect-mongo')({
  logger,
  environment,
  connectionString
})

const db = {
  Post
}

const server = require('shintech-koa')({
  pkg,
  db,
  logger,
  router,
  environment,
  port,
  host,
  root
}).listen(port)

const app = server.listen(port, () => {
  logger.info(`${pkg.name} - version: ${pkg.version} - listening at ${host}:${port}...`)
})

app.on('close', () => {
  logger.warn('shutting down server...')

  const connection = mongoose.connection

  connection.close(() => {
    logger.info('goodbye...')
  })
})

process.on('SIGINT', () => {
  app.close()
})
