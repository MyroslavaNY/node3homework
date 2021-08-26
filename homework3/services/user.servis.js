const fs = require('fs');
const path = require('path');
const userPath = path.join(__dirname, 'db', 'users');

const dbUsers = require('../db/users');

module.exports = {
    getAllUser:(req,res)=> {
        const users = fs.readFile(userPath);
        res.JSON.stringify(dbUsers);
    },
    addUser:(oneOfUser) =>{
        fs.writeFile(userPath, module.exports = `${JSON.stringify(oneOfUser)}`, (err) => {
            console.log(err);
        })
    }
}


