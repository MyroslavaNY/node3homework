const Car = require('../db/car');
const ErrorHandler = require('../errors/ErrorHandler');

module.exports = {
    isCarPresent: async (req, res,next)=>{
        try {
            const {car_id} = req.params;
            const car = await Car.findById(car_id);
            if (!car){
                throw new ErrorHandler(418, 'Car Not Found')
            }
            req.car = car;
            next();
        } catch (e){
            next(e);
        }
    },
    isCarExist: async (req, res,next)=>{
        try {
            const {model, yaer, engine, price} = req.body;
                if (!model || !yaer || ! engine || !price){
                throw new ErrorHandler(412, 'Wrong Condition')
            }
            req.car = car;
            next();
        } catch (e){
            next(e);
        }
    },
    isCarPriceValide: async (req, res, next)=>{
        try {
            const {price} = req.body;
            if (price < 0){
                throw new ErrorHandler(400, 'Bad Request')
            }
            req.car = car;
            next();
        } catch (e) {
            next(e);
        }
    }
};
