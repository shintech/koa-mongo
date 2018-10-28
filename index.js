const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const configDB = require('./server/db')
const pkg = require('./package.json')

const logger = require('shintech-logger')({ environment })
const db = configDB({ logger, environment })

if (!module.parent) require('./server')({ pkg, db, logger, environment, port })
