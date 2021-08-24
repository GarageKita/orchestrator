const express = require('express')
const router = express.Router()
const BidsC = require('../controllers/bidController')

router.post('/:id', BidsC.postBid)
router.put('/:id', BidsC.putBid)
router.get('/mybids', BidsC.getMyBids)
router.get('/:id', BidsC.getProductBid)
router.delete('/:id', BidsC.delBid)


module.exports = router