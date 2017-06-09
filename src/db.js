//Db.js

const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const User = new mongoose.Schema({
    email: {type: String, unique: true, required: true}, 
    firstname: {type: String, required: true}, 
    lastname: {type: String, required: true}, 
    password: {type: String, required: true}, 
    username: {type: String, unique: true, required: true}
});
User.plugin(URLSlugs('username'));

if(process.env.NODE_ENV === 'PRODUCTION'){
    const fs = require('fs');
    const path = require('path');
    const fn = path.join(__dirname, 'config.json');
    const data = fs.readFileSync(fn);
    const conf = JSON.parse(data);
    var dbconf = conf.dbconf;
} else{
    dbconf = 'mongodb://localhost/hanjiesBlog';
}

mongoose.model('User', User);
mongoose.connect(dbconf);

