const express = require(`express`)
const sequelize = require(`./config/connection`)
const {engine }= require(`express-handlebars`)
const session = require(`express-session`)
const routes = require(`./routes`)
const path = require(`path`)
const app = express()
const mysql = require(`mysql2`)
const PORT = process.env.PORT || 3001

app.engine(`handlebars`, engine())
app.set(`view engine`, `handlebars`)
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
  }))

app.use(`/public` ,express.static(`${__dirname}/public`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
  })

