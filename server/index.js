const express = require('express');
const app = express();

const keys = require('./config/keys');
const {DB} = require('./models/database');

DB(keys.DBConnection);

require('./routes/common.route')(app);

const PORT = process.env.PORT ||  4000;
app.listen(PORT);
