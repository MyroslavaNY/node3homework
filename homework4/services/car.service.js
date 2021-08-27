const {Car}= require('../db/car');

module.exports = {
    createCar:(car) => Car.create(car),
    deleteCar:(car_id) => Car.delete(car_id),
    findCars:() => Car.find(),
    updateCar:(car_id, data) => Car.updateOne(car_id, data)
};
