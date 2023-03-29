const express = require(`express`)
const sequelize = require(`./config/connection`)
const {engine }= require(`express-handlebars`)
const session = require(`express-session`)
const app = express()
const PORT = process.env.PORT || 3001

app.engine(`handlebars`, engine())
app.set(`view engine`, `handlebars`)
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
  }))

app.get(`/`, (req, res) => {
    res.render(`homepage`)
})
app.get(`/login`, (req, res) => {
    res.render(`login`)
})
app.get(`/register`, (req, res) => {
    res.render(`register`)
})
app.get(`/blogs/`, (req, res) => {
    res.render(`blogs`)
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
  })


  function requireLogin(req, res, next) {
    if (req.session && req.session.user) {
      next()
    } else {
      res.redirect('/login')
    }
  }