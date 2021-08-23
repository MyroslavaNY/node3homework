const router = require('express').Router();
const { authController } = require('../controllers');

router.post('/', authController.email);

module.exports = router;
