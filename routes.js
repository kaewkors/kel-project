const express = require('express')

const router = express.Router()

const db = require('./db')

// router.get('/', (req, res) => {
//     res.send('Welcome!')
// })

router.get('/' , (req, res) => {
    db.getTypes()
        .then(type => {
            res.render('home', {key: type})
        })
})
module.exports = router

// router.get('/types/:id', (req, res) => {
//    res.send('ok')
//     // db.getType()
//         // .then(type => {
//             res.render('home', {key: type})
//         // })
// })