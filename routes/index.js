const express = require('express')
const router = express.Router()
const UserC = require('../controllers/userController')
const CategoryC = require('../controllers/categoryController')
const RequestC = require('../controllers/requestController')
const categoryRoute = require('./categories')
const requestRoute = require('./requests')
const productRoute = require('./products')
const bidRoute = require('./bids')
const offerRoute = require('./offer')
const emailRoute = require('./email')
const dealRoute = require('./deals')
// user
router.post('/login', UserC.login)
router.post('/register', UserC.register)
router.put('/user/:id', UserC.putUser)

router.use('/categories', categoryRoute)
router.use('/requests', requestRoute)
router.use('/products', productRoute)
router.use('/bids', bidRoute)
router.use('/offers', offerRoute)

router.use('/email', emailRoute)

router.use('/deals', dealRoute)

module.exports = router