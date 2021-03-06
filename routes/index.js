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
const ongkirRoute = require('./ongkir')
const dealRoute = require('./deals')
const addressRoute = require('./address')
// user
router.post('/login', UserC.login)
router.post('/register', UserC.register)
router.put('/user/:id', UserC.putUser)
router.patch('/user/makeadmin', UserC._TESTONLY_MAKEADMIN)
router.post('/oauthgoogle/login-google', UserC.loginGoogle)

router.use('/categories', categoryRoute)
router.use('/requests', requestRoute)
router.use('/products', productRoute)
router.use('/bids', bidRoute)
router.use('/offers', offerRoute)
router.use('/address', addressRoute)

router.use('/email', emailRoute)
router.use('/ongkir', ongkirRoute)

router.use('/deals', dealRoute)

module.exports = router