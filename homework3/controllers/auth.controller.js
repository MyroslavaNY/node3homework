const db = require('../db/users');

module.exports = {
    createUser: (req, res) => {
        const {email, password} = req.params;
        const oneOfUser = users.find((user) => user.email === email && user.password === password);
        if (!oneOfUser) {
            users.push(db);
            res.json(db);
            return;
        }
        res.status(404).end('Try again');
    },
    getAllUsers: (req, res) => {
        res.json(db);
    }
}
