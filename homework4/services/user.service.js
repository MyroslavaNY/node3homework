const {User} = require('../db/users');

module.exports = {
    createUser: (user)=> User.create(user),
    deleteUser:(user_id)=> User.delete(user_id),
    findUsers:()=> User.find(),
    findUserById:(user_id)=> User.find(user_id),
    updateUserById:(user_id, updata)=> User.updateOne(user_id, updata)

};
