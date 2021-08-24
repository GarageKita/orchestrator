const express = require('express')
const router = express.Router()
const OfferC = require('../controllers/offerController')

router.post('/:id', OfferC.postOffer)
router.put('/:id', OfferC.putOffer)
router.get('/myoffers', OfferC.getMyOffer)
router.get('/:id', OfferC.getRequestOffer)
router.delete('/:id', OfferC.delOffer)


module.exports = router