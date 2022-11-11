const mongoose = require('mongoose');
const dotenv = require('dotenv')
const users = require('./data/users')
const User = require('./models/user')
const Product = require('./models/product')
const Order = require('./models/orderModel')
const products = require('./data/product');
const connectDb = require('./config/config')

dotenv.config();
connectDb();


const importData = async() => {
    try {
        
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const CreateUser = await User.insertMany(users)
        
        const Admin = CreateUser[0]._id;
        const sampleData = products.map(product => {
            return{...product,User:Admin}
        })
        await Product.insertMany(sampleData)
     
        process.exit();
    } catch (err) {
        throw err
    }
}

const dataDestroy=async()=> {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        process.exit()
    } catch (err) {
        throw err
    }
}
if (process.argv[2] == "-d") {
    dataDestroy();
} else {
    importData()
}