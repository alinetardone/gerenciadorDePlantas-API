const config = require('../../config/environment.config')
const express = require('express')
const cors = require('cors')

const routes = require('./src/app/routes')

let app = express()

const port = config.SERVER_PORT

class App {

  constructor() {

    this.middlewares()
    this.server()
  }

  middlewares() {

    app.use(cors())
    app.use(express.json({ limit: '100mb' }))

    routes(app)
  }
  server() {

    const server = app.listen(port, () => {
      console.log(`|== Aplicação rodando na porta ${port} ==|`)
    })
    process.on('SIGINT', () => {
      server.close()
      console.log("|== Aplicação finalizada ==|")
    });
  }
}

module.exports = new App()