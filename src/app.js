const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()


// init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// morgan("combined")
// morgan("common")
// morgan("short")
// morgan("tiny")
// init db
require('./dbs/init.mongodb')
const { countConnect } = require('./helpers/check.connect')
countConnect
// init router
app.get('/',(req, res, next) => {
    const strCompress = 'Hello Factipjs'
    return res.status(200).json({
        message: 'Welcome Fantipjs',
        metadata: strCompress.repeat(100000)
    })
})
// handling error 

module.exports =app