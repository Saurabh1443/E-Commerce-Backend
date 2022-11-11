const express = require("express");
const cors=require('cors')
const products=require('./data/product')
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const colors = require('colors');
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

dotenv.config({ path: "./config/config.env" });
connectDb();

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
    res.send('<h1>Welcome to node server</h1>')
    console.log('server started')
})

productRoutes(app);
userRoutes(app);
orderRoutes(app);
paymentRoutes(app);

const PORT=8080
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`.inverse);
})