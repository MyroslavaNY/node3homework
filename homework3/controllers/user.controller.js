const db = require('../db/users');

module.exports= {
    getSingleUser:(req,res) =>{
        const {email} = req.params;
        if (!user){
            res.status(404).json('Registration,Please');
            return;
        }
        res.json(user);
    },

    getAllUser:(req,res) =>{

    },

    createUser:(req,res)=>{

    },

}
