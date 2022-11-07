const Order =require('../models/orderModel')
const checkObj = require('../config/setting')

const { errorObj, successObj } = checkObj

const x = {
    addOrderItems: (data) => {
        return new Promise(async (resolve) => {
            
            const {
               orderItems,shippingAddress,paymentMethod,itemsPrice,taxPrice,shippingPrice,totalPrice,User,eligibleForFreeShipping
            } = data
           console.log(shippingPrice,'ddddddddddd')
            if (!orderItems || !orderItems.length) {
                return resolve({
                    ...errorObj,
                    message: "Order not found",
                  });
            } 
            const order = new Order();
            
            order.orderItems = orderItems;
            order.shippingAddress = shippingAddress;
            order.shippingPrice = shippingPrice;
            order.paymentMethod = paymentMethod;
            order.itemsPrice = itemsPrice;
            order.taxPrice = taxPrice;
            order.totalPrice = totalPrice;
            order.shippingPrice = shippingPrice;
            order.User = User;
            order.eligibleForFreeShipping = eligibleForFreeShipping;
            
            order.save((err, doc) => {
                if (err || !doc) {
                    
                    return resolve({
                        ...errorObj,
                        message: "order already exist.",
                      });
                }
                else {
                    return resolve({
                        ...successObj,
                        message: "Order placed successfully",
                        data:doc
                      });
                }
             })
        })
    },
    getOrders: (query) => {
        return new Promise(async (resolve) => {
            Order.find(query).lean().exec((err, doc) => {
                if (err || !doc) {
                    return resolve({ ...errorObj, err })
                } else {
                    return resolve({...successObj,doc})
                }
            })
        })
    },
    getSpecificOrders: (query) => {
        return new Promise(async (resolve) => {
            let {id1:_id,id2:product} = query
            Order.find({_id,orderItems: {$elemMatch:{product}}}).lean().exec((err, doc) => {
                if (err || !doc) {
                    return resolve({ ...errorObj, err })
                } else {
                    return resolve({...successObj,doc})
                }
            })
        })
    },
    
}
module.exports= x