let Post = require('./schemas/Post')
const mongoose = require('mongoose')

const DB = process.env['MONGO_INITDB_DATABASE'] || 'api_development'
const URL = process.env['MONGO_URL'] || 'localhost'

let connectionString = `mongodb://${URL}/${DB}`

module.exports = ({ logger, environment }) => {
  mongoose.connect(connectionString, { useNewUrlParser: true }, function (err, connection) {
    if (err) {
      logger.error('Error: ' + err)
    } else {
      if (environment === 'development') { logger.info('Connected to database: ' + connectionString) }
    }

    connection.on('close', () => {
      logger.warn('Closing mongodb connection...')
    })
  })

  let schemas = {
    Post
  }

  return schemas
}
