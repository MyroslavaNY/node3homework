const express = require('express');

const {PORT} = require('./config/variables');
const db = require('./db/users');

const app = express();
const { userRouter, authRouter,  } = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/ping', (req, res) => res.json('Pong'));

app.use('/users', userRouter);
app.use('/auth', userRouter);

app.listen(PORT, ()=>{
    console.log('App listen', PORT);
});
