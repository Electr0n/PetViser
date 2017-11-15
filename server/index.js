const express = require('express');
const app = express();
require('./routes/test.route')(app);

const PORT = 4000;
app.listen(PORT);
