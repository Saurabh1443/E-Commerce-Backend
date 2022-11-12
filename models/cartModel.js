const mongoose = require('mongoose');


const cartSchema = mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    savedItems: [
        {
            productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
            
        },
        Qty: {
                type: Number,
                
         } 
        }
       
    ]
})

const Cart = mongoose.model('Cart', cartSchema);
module.exports= Cart;