const mongoose = require('mongoose');
const colors = require('colors')

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            
        });
console.log('mongodb connected')
    } catch (err) {
       
        process.exit(1);
    }
}
module.exports=connectDb