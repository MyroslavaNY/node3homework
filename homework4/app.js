const express = require('express');
const mongoose = require('mongoose');
const {PORT} = require('./config/variables');

const app = express();

mongoose.connect(mongodb);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('*', _notFoundError);
app.use(_notFoundError);

const {carRouter, userRouter} = require('./routes');

app.get('/ping', (req, res)=> res.json('Pong'));

app.use('./cars', carRouter);
app.use('./users', userRouter);
app.use('*', _notFoundError);
app.use(_mainErrorHandler);

app.listen(PORT, ()=>{
    console.log('App listen', PORT);
});

function _notFoundError(err, req, res, next) {
    next({
        status: 404,
        message: 'Not found'
    });
}
// eslint-disable-next-line no-unused-vars
function _mainErrorHandler(err, req, res, next){
    res
        .status(err.status)
        .json({
            message: err.message
        });
}

