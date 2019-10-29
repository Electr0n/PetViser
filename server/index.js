const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./models');
require('./routes/common.route')(app);
require('./routes/entities.route')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
