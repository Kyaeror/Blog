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

// app.get(`/`, (req, res) => {
//     res.render(`homepage`)
// })
// app.get(`/login`, (req, res) => {
//     res.render(`login`)
// })
// app.get(`/register`, (req, res) => {
//     res.render(`register`)
// })
// app.get(`/createBlog`, (req, res) => {
//     res.render(`createBlog`)
// })
// app.get(`/dashboard`, (req, res) => {
//     res.render(`dashboard`)
// })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
  })

