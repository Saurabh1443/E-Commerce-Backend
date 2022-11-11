const Razorpay = require('razorpay')
const checkObj = require('../config/setting')
const crypto = require('crypto');
const shortId= require('shortid')
const { errorObj, successObj } = checkObj
const OrderCtrl = require('./orderController')

const x = {
    checkoutPayment: (data) => {
        return new Promise(async (resolve) => {

            try {
                // console.log(process.env.RAZORPAY_API_KEY," ",process.env.RAZORPAY_API_SECRET,'ssssssssssssss')
                const instance = new Razorpay({
                    key_id: process.env.RAZORPAY_API_KEY,
                    key_secret: process.env.RAZORPAY_API_SECRET,
                });
                
                const options = {
                    amount: Number(data.amount * 100),
                  currency: "INR",
                  receipt: shortId.generate()
                  };
                const order = await instance.orders.create(options);
                  return resolve({...successObj,order})
            } catch (err) {
                throw err
             }
              
        })
    },
    paymentVerification: (data) => {
        return new Promise(async (resolve) => {
           
            try {
                const { razorpay_order_id, razorpay_payment_id, razorpay_signature,_id } =
            data;
        
          const body = razorpay_order_id + "|" + razorpay_payment_id;
             
          const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
            .update(body.toString())
            .digest("hex");
        
          const isAuthentic = expectedSignature === razorpay_signature;
              if (isAuthentic) {

                let body = {};
                body._id = _id;
                body.paymentResult = {
                  razorpay_order_id: razorpay_order_id,
                  razorpay_payment_id: razorpay_payment_id,
                  razorpay_signature: razorpay_signature,
                };
                body.isPaid = true;
                body.paidAt = Date.now();
                body.paymentMethod = 'Razorpay'
                
                const {data} = await OrderCtrl.updateOrderStatus(body)

           
              
              resolve({...successObj,doc:data})
       
          } else {
            return resolve({...errorObj,doc:{}})
          }
            } catch (err) {
                console.log(err,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            }
        })
    }
}
module.exports= x