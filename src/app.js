// Dependencies
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')

// view engine setup
const app = express()
app.set('views', path.join(__dirname, 'views/pages'))
app.set('view engine', 'ejs')

// middleware setup
app.use(logger('common'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// get and use routers
app.use('/', require('./routes/index'))

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)))

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message

  // render the error page
  res.status(err.status)
  res.render('error', { status: err.status })
})

module.exports = app
