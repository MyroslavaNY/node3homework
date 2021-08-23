const db = require('../db/users');

module.exports = {
    getSingleUser:(req,res) =>{
        const { email, password } = req.params;
        if (!user){
            res.status(404).json('Registration,Please');
            return;
        }
        res.json(db);
    },

    addUser:(req,res)=>{
        if (isUser){
            res.status(200).end('Hello');
            return;
        }
            res.status(401).end('Your password is incorrect');
    },

}
