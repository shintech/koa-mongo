/* eslint-env jest */

var request = require('supertest').agent(_server)

console.log = jest.fn()

afterAll(async () => {
  await _server.close()
})

describe('SERVER -> GET /api/posts -> api.fetchAll()..', () => {
  let res

  beforeAll(async () => {
    res = await request.get('/api/posts')
  })

  it('expect posts.length to be greater than 0...', () => {
    expect(res.body.length).toBeGreaterThan(0)
  })

  it('expect posts[0] to have property _id...', () => {
    expect(res.body[0]).toHaveProperty('_id')
  })

  it('expect posts[0]._id to equal mock._id...', () => {
    expect(res.body[0]._id).toEqual(_postsMock[0]._id)
  })
})

describe('SERVER -> GET /api/posts/:id -> api.fetchOne()..', () => {
  let res

  beforeAll(async () => {
    res = await request.get(`/api/posts/${_postsMock[0]._id}`)
  })

  it('expect posts[0] to have property _id...', () => {
    expect(res.body).toHaveProperty('_id')
  })

  it('expect posts[0]._id to equal mock._id...', () => {
    expect(res.body._id).toEqual(_postsMock[0]._id)
  })

  it('expect posts[0] to have property title...', () => {
    expect(res.body).toHaveProperty('title')
  })

  it('expect posts[0].title to equal mock.title...', () => {
    expect(res.body.title).toEqual(_postsMock[0].title)
  })

  it('expect posts[0] to have property body...', () => {
    expect(res.body).toHaveProperty('body')
  })

  it('expect posts[0].body to equal mock.body...', () => {
    expect(res.body.body).toEqual(_postsMock[0].body)
  })

  it('expect posts[0] to have property summary...', () => {
    expect(res.body).toHaveProperty('summary')
  })

  it('expect posts[0].summary to equal mock.summary...', () => {
    expect(res.body.summary).toEqual(_postsMock[0].summary)
  })
})
