const express = require('express');
const app = express();
require('./routes/common.route')(app);

const PORT = process.env.PORT ||  4000;
app.listen(PORT);
