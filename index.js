const mongoose = require('mongoose')
const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || '127.0.0.1'
const configDB = require('./server/db')
const pkg = require('./package.json')

const logger = require('shintech-logger')({ environment })
const db = configDB({ logger, environment })

const root = __dirname

const server = require('./server')({ pkg, db, logger, environment, port, root })

const app = server.listen(port, () => {
  logger.info(`${pkg.name} - version: ${pkg.version} - listening at ${host}:${port}...`)
  logger.info(`served from ${root}...`)
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
