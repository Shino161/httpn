import { join } from 'path'
import * as Koa from 'koa'
import * as serve from 'koa-static'
import * as bodyParser from 'koa-bodyparser'
import * as session from 'koa-session'

import { router } from './router'

const app = new Koa
app.keys = ['koa']

app.use(serve(join(__dirname, '..', 'static')))

app.use(bodyParser())
app.use(session(app))

app.use(router.routes())

export default app
