// Express imports
const express = require('express'),
    router = express.Router()


router.post('/', async (req, res) => {
    const query = req.body.number

    const transform = query.toString(2)

    res.status(200).send(transform)
    
})

module.exports = router