import * as Router from 'koa-router'

const router = new Router

router.get('/hi', ctx => ctx.body = 'hello')

export default router