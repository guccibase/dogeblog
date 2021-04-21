const express = require('express')
const { model } = require('mongoose')
const router = express.Router()


router.get('/', (req, res)=>{
    res.send('Doge to the moon')
})

router.get('/new', (req, res) => {
    res.render('new')
})

module.exports = router