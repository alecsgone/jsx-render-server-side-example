import webpack from 'webpack'
import middleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import express from 'express'
import dom from 'jsx-render'
import renderServer from 'jsx-render/renderServer'

import config from './webpack.config'
import App from './src/entry'

const app = express()
const compiler = webpack(config)

app.use(middleware(compiler))
app.use(webpackHotMiddleware(compiler))
// app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function indexRoute(req, res) {
  res.render('index', { app: renderServer(<App />) })
})

const server = app.listen(3030, function cb() {
  console.log('server at 3030')
  server.keepAliveTimeout = 0
})
