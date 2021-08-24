const express = require('express')
const router = express.Router()
const ProductC = require('../controllers/productController')

router.get('/myproducts', ProductC.getMyProducts)
router.get('/', ProductC.getProducts)
router.get('/:id', ProductC.getProducts)

router.post('/', ProductC.postProduct)
router.put('/:id', ProductC.putProduct)
router.delete('/:id', ProductC.delProduct)

module.exports = router