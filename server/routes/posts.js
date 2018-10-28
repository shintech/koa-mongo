module.exports = {
  fetchAll: async (ctx, next) => {
    const { db } = ctx

    let body

    try {
      body = await db.Post.find()
    } catch (err) {
      body = err.message
    }

    await next()

    ctx.status = 200
    ctx.body = body
  },

  fetchOne: async (ctx, next) => {
    const { db } = ctx

    let body

    try {
      body = await db.Post.findOne({ _id: ctx.params.id })
    } catch (err) {
      body = err.message
    }

    await next()

    ctx.status = 200
    ctx.body = body
  },

  addPost: async (ctx, next) => {
    const { db, request, logger } = ctx

    const attrs = {
      title: request.body.title,
      body: request.body.body,
      summary: request.body.summary
    }

    let post = new db.Post(attrs)
    let status, body

    try {
      body = await post.save()
      status = 200
    } catch (err) {
      logger.error(err.message)

      body = err.message
      status = 500
    }

    await next()

    ctx.status = status
    ctx.body = body
  }
}
