const express = require('express');
const colors = require('colors');
const morgan = require('morgan');

const app = express();

app.get('/', (req, res) => res.send('API RUNNING SMOOTHLY'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`.red.bold));
