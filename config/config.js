const express = require('express')

module.exports.setUpServer = () => {
    const app = express()

    app.use(express.static('../public'))

    app.use(express.json())

    app.use(require('../controllers'))

    return app
}