const express = require('express')
const router = express.Router()
const CategoryC = require('../controllers/categoryController')

router.get('/', CategoryC.getCategory)
router.post('/', CategoryC.postCategory)
router.put('/:id', CategoryC.putCategory)
router.delete('/:id', CategoryC.delCategory)


module.exports = router