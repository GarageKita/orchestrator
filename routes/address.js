const express = require('express')
const router = express.Router()
const AddressC = require('../controllers/addressController')

router.post('/', AddressC.postAddress)
router.put('/:id', AddressC.putAddress)
router.get('/myaddress', AddressC.getMyAddress)
router.delete('/:id', AddressC.delAddress)


module.exports = router