const User = require('../models/user');

exports.signup = (req, res) => {

    const user = new User(req.body);
    user.save((err, user) =>{
        if(err){
            return res.status(400).json({
                err:"Not able to save user!",
                err_mas:err
            })
        }

        return res.status(200).json({
            user:user
        })
    });
}