const router = require('express').Router();
const { authController, userController} = require('../controllers');

router.post('/', authController.getAllUsers);

router.get('/:user_id', userController.getSingleUser);

router.put('/:user_id', userController.addUser);

module.exports = router;
