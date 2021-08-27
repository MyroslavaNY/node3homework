const {updateCar} = require("../services/car.service");
const {deleteCar} = require("../services/car.service");
const {createCar} = require("../services/car.service");
const {findCars} = require("../services/car.service");
// const {carService} = require('../services');
module.exports = {
    getFindCars: async (req, res, next)=>{
        try {
            const cars = await findCars();
            res.json(cars);
        }catch (e) {
           next(e);
        }
    },
    createCar: async (req, res, next) => {
        try {
             await createCar(req.body);

            res.status(201).end(car);
        } catch (e) {
            next(e);
        }
    },
    deleteCar: async (req, res, next) => {
        try {
            const { car_id } = req;

            await deleteCar(car_id);

            res.status(204).end(carDelete);
        } catch (e) {
            next(e);
        }
    },
    updateCar: async (req, res, next) => {
        try {
            const { car_Id } = req.params;

            await updateCar(car_Id, req.body);

            res.status(201).json(updateCar);
        } catch (e) {
            next(e);
        }
    }
};
