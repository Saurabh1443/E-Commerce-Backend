const express = require("express");
const products=require('./data/product')
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const colors = require('colors');
dotenv.config()
connectDb();
const app = express();



app.get('/', (req, res) => {
    res.send('<h1>Welcome to node server</h1>')
    console.log('server started')
})
app.get('/products', (req, res) => {
    res.json(products)
})

const PORT=8080
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`.inverse);
})