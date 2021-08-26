
const fs = require('fs');
const userService = require('../services/user.servis');
const {createUser, getAllUsers} = userService;
const dbUsers =require('../db/users');

module.exports = {
    createUser: (req, res) => {
        const {email, password} = req.params;
        const oneOfUser = dbUsers.find((user) => user.email === email && user.password === password);
        if (!oneOfUser) {


                dbUsers.push(req.params);
            res.json(dbUsers);
            return;
        }
        res.status(404).end('Try again');
    },
    getAllUsers: (req, res) => {
        res.json(dbUsers);
    }
}
