const router = require('express').Router();

const {userController} = require('../controllers');
const {isUserPresent, checkUniqueEmail, isUserRegistered} = require('../middlewares');

router.get('/',userController.getAllOfUsers);
router.post('/', checkUniqueEmail, userController.createUser);
router.post('/:user_id', isUserRegistered, userController.updateUser);
router.delete('/:user_id', isUserPresent, userController.deleteUser );

module.exports = router;
