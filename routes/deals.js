const router = require('express').Router();
const DealController = require('../controllers/dealController');

router.post('/', DealController.createDealTransaction);
router.get('/', DealController.getAllUserTransaction);
router.get('/:id', DealController.getAllUserTransaction);
router.delete('/:id', DealController.deleteTransaction);
router.patch('/:id', DealController.updateTransaction);

module.exports = router;