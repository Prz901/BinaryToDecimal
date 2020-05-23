const express = require('express'),
    router = express.Router()

const Transform = require('./tranform')

// Routes in use
router.use('/api/transform', Transform)

// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = router