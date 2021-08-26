const userService = require('../services/user.servis');
const {getSingleUser} = userService;
const dbUsers =require('../db/users');

module.exports = {
    getSingleUser: (req, res) => {
        if (!dbUsers) {
            res.json(404).end('User not found');
            return;
        }
        res.json(dbUsers);
    },
}
