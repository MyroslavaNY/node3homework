const router = require('express').Router();
const { userController, authController } = require('../controllers');

router.get('/', authController.getAllUsers);

router.post('/', authController.createUser);

router.get('/:user_id', userController.getSingleUser);

router.put('/:user_id', userController.addUser);

module.exports = router;
