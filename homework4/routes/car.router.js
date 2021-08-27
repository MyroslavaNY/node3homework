const router = require('express').Router();

const {carController} = require('../controllers');
const {isCarPresent, isCarExist} = require('../middlewares/car.middleware');

router.get('/',carController.getFindCars);
router.put('/:car_id', isCarExist, carController.updateCar);
router.put('/', carController.createCar);
router.delete('/:car_id', isCarPresent, carController.deleteCar );

module.exports = router;
