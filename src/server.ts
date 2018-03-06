import * as http from 'http'
import app from './app'
import { log } from './logger'

const port = 3000

http.createServer(app.callback()).listen(port, () => log.info(`bind ${port}`))