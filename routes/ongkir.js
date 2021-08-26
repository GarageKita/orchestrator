const express = require('express') 
const router = express.Router() 
const ongkirController = require('../controllers/ongkirController.js')

router.get('/province', ongkirController.getProvince)
router.get('/city', ongkirController.getCity)
router.post('/cost', ongkirController.countCost)

module.exports = router