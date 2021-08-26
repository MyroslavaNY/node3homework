const express = require('express');
const mongoose = require('mongoose');
const {PORT} = require('./config/variables');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('*', _notFoundError);
app.use(_notFoundError);

app.listen(PORT, ()=>{
    console.log('App listen', PORT);
});

function _notFoundError(err, req, res, next) {
    next({
        status: 404,
        message: 'Not found'
    });
}

function _mainErrorHandler(err, req, res, next){
    res
}

