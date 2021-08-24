const express = require('express')
const router = express.Router()
const RequestC = require('../controllers/requestController')

router.get('/myrequests', RequestC.getMyRequest)
router.get('/', RequestC.getRequest)
router.get('/:id', RequestC.getRequest)
router.post('/', RequestC.postRequest)
router.put('/:id', RequestC.putRequest)
router.delete('/:id', RequestC.delRequest)

module.exports = router