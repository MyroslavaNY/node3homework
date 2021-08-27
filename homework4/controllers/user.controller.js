const {createUser} = require("../services/user.service");
const {userService} = require('../services');

module.exports = {
    getAllOfUsers: async (req,res, next) =>{
    try {
        const users = await userService.findUsers();
        res.json(users);
    } catch (e) {
        next(e);
    }
},
    updateUser: async (req, res, next) =>{
        try {
            const {user_id} = req.params;
            await userService.updateUserById(user_id);
            res.status(201).json(userUpdate);
        } catch (e) {
            next(e);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const { user_id } = req;

            await deleteUser (user_id);

            res.status(204).end(userDelete);
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        try {
            await createUser(req.body);

            res.status(201).end(user);
        } catch (e) {
            next(e);
        }
    }
};
