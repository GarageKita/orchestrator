const express = require('express') 
const router = express.Router() 
const emailController = require('../controllers/emailController.js')

// const handlerGetSlash = (req, res) => {
//     /* istanbul ignore next */
//     res.send("Ini adalah API Untuk Auth dan Email")
// }

// router.get('/', handlerGetSlash) 

router.post('/sendactivation/:email', emailController.sendActivation)
router.get('/activation', emailController.activatedAccount)

module.exports = router