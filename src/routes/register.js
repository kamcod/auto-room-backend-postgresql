const express = require('express')
const router = express.Router()

// const { SignUp, SignIn, Logout, Test } = require('../controllers/register')
const { SignUp, Test } = require('../controllers/register')

router.route('/test').post(Test) // Test Route
router.route('/register').post(SignUp)
// router.route('/login').post(SignIn)
// router.route('/logout').delete(Logout)


module.exports = router
