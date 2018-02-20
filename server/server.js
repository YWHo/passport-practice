const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const passportLocal = require('passport-local')
const expressSession = require('express-session')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
server.use(passport.initialize())
server.use(passport.session())
server.use(express.static(path.join(__dirname, '../public')))


module.exports = server