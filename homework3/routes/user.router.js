const router = require('express').Router();
const { userController, authController } = require('../controllers');

router.get('/', authController.getAllUsers);

router.post('/', authController.createUser);

module.exports = router;
