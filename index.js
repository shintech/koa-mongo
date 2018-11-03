const mongoose = require('mongoose')
const pkg = require('./package.json')
const router = require('./router')

const root = __dirname
const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || 'localhost'

const logger = require('shintech-logger')({
  environment
})

const db = require('./server/db')({
  logger,
  environment
})

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
