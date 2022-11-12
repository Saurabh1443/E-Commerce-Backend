const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    orderItems: [
        {
            
            name: {
                type: String,
                required:true
            },
            Qty: {
                type: Number,
                required:true
            },
            image: {
                type: String,
                required:true,
            },
            price: {
                type: Number,
                required:true
            },
            _id: {
                type: String,
                required: true,  
            },
        }
    ],
    shippingAddress: {
        address: {
            type: String,
            required: true,
            
        },
        city: {
            type: String,
            required:true
        },
        postalCode: {
            type: Number,
            required:true
        },
        country: {
            type: String,
            required:true
        }
    },
    paymentMethod: {
        type: String,
        default:"(COD) Cash On Delivery"
    },
    paymentResult: {
        razorpay_order_id: { type: String },
        status: { type:String },
        razorpay_payment_id: { type: String },
        razorpay_signature:{ type: String },
    },
    taxPrice: {
        type: Number,
        required: true,
        default:0.0
    },
    shippingPrice:{
      type: Number,
        required: true,
      default:0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default:0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default:false
    },
    orderedAt: {
        type: Date,
        default:Date.now()
    },
    paidAt:{
        type: Date,
        default:Date.now()
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default:false
    },
    deliveredAt: {
        type: Date,
        default: Date.now()
    },
    eligibleForFreeShipping: {
        type: Boolean,
        default:false
    },


}, { timeStamps: true })

const order = mongoose.model('order', orderSchema);
module.exports= order;