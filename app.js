const express = require('express');
const mongoDB = require('./mongoose');

const app = express();
app.use(express.json());

//POST
app.post('/products', mongoDB.createProduct);

//GET
app.get('/products', mongoDB.getProducts);

app.listen(3000);