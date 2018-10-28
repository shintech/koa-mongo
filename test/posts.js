/* eslint-env mocha  */

const chai = require('chai')
const chaiHttp = require('chai-http')
var Post = require('../server/schemas/Post')
const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const configDB = require('../server/db')

const logger = require('shintech-logger')({ environment })
const db = configDB({ logger, environment })
const server = require('../server')({ db, logger, environment, port })

chai.use(chaiHttp)
const expect = chai.expect

describe('INIT', () => {
  before(function (done) {
    Post.collection.drop(err => { if (err && (err.message === 'ns not found')) return false })
    done()
  })

  it('should not contain data', done => {
    chai.request(server)
      .get('/api/posts')
      .end(function (err, res) {
        expect(err).to.be.null // eslint-disable-line
        expect(res.body).to.be.empty // eslint-disable-line
        done()
      })
  })
})

describe('POSTS', function () {
  beforeEach(function (done) {
    let newPost = new Post({
      title: 'title',
      summary: 'summary',
      body: 'body'
    })

    newPost.save(err => {
      if (err) { throw new Error(err.message) }
      done()
    })
  })

  afterEach(done => {
    Post.collection.drop()
    done()
  })

  it('GET /api/posts', done => {
    chai.request(server).get('/api/posts')
      .end(function (err, res) {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        expect(res.body[0]).to.have.property('_id')
        expect(res.body[0]).to.have.property('title')
        expect(res.body[0]).to.have.property('summary')
        expect(res.body[0]).to.have.property('body')
        done()
      })
  })

  it('GET /api/post/:id', done => {
    chai.request(server)
      .get('/api/posts')
      .end(function (error, response) { // eslint-disable-line
        expect(error).to.be.null // eslint-disable-line
        chai.request(server)
          .get(`/api/posts/${response.body[0]._id}`)
          .end(function (err, res) {
            expect(err).to.be.null // eslint-disable-line
            expect(res).to.have.status(200)
            expect(res.body).to.have.property('_id')
            expect(res.body).to.have.property('title')
            expect(res.body).to.have.property('summary')
            expect(res.body).to.have.property('body')
            done()
          })
      })
  })

  it('create one post at /api/post', done => {
    chai.request(server)
      .post('/api/posts')
      .send({ title: 'title', summary: 'summary', body: 'body' })
      .end(function (err, res) {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        done()
      })
  })
})
