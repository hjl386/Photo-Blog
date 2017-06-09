//Db.js

const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

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

mongoose.connect(dbconf);

