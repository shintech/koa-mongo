const posts = require('./posts')
const Router = require('koa-router')

module.exports = new Router({
  prefix: '/api'
})

  .use(async (ctx, next) => {
    await next()

    ctx.set('Content-Type', 'application/json')
  })

  .get('/posts', posts.fetchAll)
  .post('/posts', posts.addPost)

  .get('/posts/:id', posts.fetchOne)
