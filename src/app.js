//App.js

const express = require('express');
const session = require('express-session');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('./db');

const PORT = 3000;
const app = express();
const saltRounds = 10;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const sessionOptions = {
    secret: 'Sgw4ng229jpj$bu24508#*))$nq,/',
    resave: true,
    saveUnitialized: true
};
app.use(session(sessionOptions));
