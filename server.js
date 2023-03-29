const express = require(`express`)
const sequelize = require(`./config/connection`)
const {engine }= require(`express-handlebars`)
const session = require(`express-session`)
const routes = require(`./routes`)
const app = express()
const PORT = process.env.PORT || 3001

app.engine(`handlebars`, engine())
app.set(`view engine`, `handlebars`)
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
  }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
  })

