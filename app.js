const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');
const url = config.bd_string;
const options = { useNewUrlParser: true };

mongoose.connect(url,options);
//mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('erro na conexao '+ err);
});

mongoose.connection.on('disconnected', () => {
    console.log('banco desconectadis');
});

mongoose.connection.on('connected', () => {
    console.log('banco conectadis');
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use('/',indexRoute);
app.use('/users',usersRoute);

app.listen(3000);

module.exports = app;