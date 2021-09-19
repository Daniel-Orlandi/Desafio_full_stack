const express = require('express')
const routes = require('./routes')
const path = require('path')

class App{
  constructor(){
    this.server = express()
    this.middleware()
    this.routes()
    this.views()
   
  }

  middleware(){
    this.server.use(express.json())
  }

  routes () {
    this.server.use(routes)
  } 

  views () {
    this.server.set('views', path.join(__dirname, 'views'))
    this.server.set('view engine', 'pug')
  }
}
module.exports = new App().server
