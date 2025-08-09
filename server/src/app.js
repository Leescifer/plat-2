const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/task.routes'));
app.use('/api', require('./routes/product.routes'));

app.get('/', (req, res) => {
    res.send('Hello dsada')
});

module.exports = app;