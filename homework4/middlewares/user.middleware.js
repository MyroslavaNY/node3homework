const User = require('../db/users');
const ErrorHandler = require('../errors/ErrorHandler');

module.exports = {
    issUserPresent: async (req,res,next) =>{
        try {
            const { user_id } = req.params;
            const user = await User.findById(user_id);
            if (!user){
                throw new ErrorHandler(418, 'User Not Found');
            }
            req.user = user;

            next();
        }
        catch (e){
            next(e);
        }
    },
    checkUniqueEmail:async (req, res, next) => {
        try {
            const { email } = req.body;
            const userByEmail = await User.findOne({email});

            if (userByEmail){
                throw new ErrorHandler(409, `Email:${email} exist`);
            }
            next();
        } catch (e) {
            next(e);
        }
    }

}
