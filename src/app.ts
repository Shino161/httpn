import * as Koa from 'koa'

import router from './router'

const app = new Koa

app.use(router.routes())

// 导出服务
export default app
