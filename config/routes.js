const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/userController')
const contactController = require('../app/controllers/contactController')
const authenticateUser = require('../app/middlewares/authentication')

router.post('/users/register', userController.register)
router.post('/users/login', userController.login)
router.get('/users/account', authenticateUser, userController.account)
router.delete('/users/logout', authenticateUser, userController.logout)

router.get('/contacts', authenticateUser, contactController.list)
router.post('/contacts', authenticateUser, contactController.create)
router.get('/contacts/:id', authenticateUser, contactController.show)
router.put('/contacts/:id', authenticateUser, contactController.update)
router.delete('/contacts/:id', authenticateUser, contactController.destroy)

module.exports = router