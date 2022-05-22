const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const HOST = '0.0.0.0';
const PORT = 8080;

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello Léo!' });
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});