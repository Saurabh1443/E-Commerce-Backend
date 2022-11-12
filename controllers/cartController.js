const Cart =require('../models/cartModel')
const checkObj = require('../config/setting');
const { getProductById } = require('./product');
const cartRoutes = require('../routes/cartRoutes');

const { errorObj, successObj } = checkObj;

const x = {
    addCartItems: (data) => {
        return new Promise(async (resolve) => {
            const { User, productId,Qty } = data
            // if (!savedItems || !savedItems.length) {
            //     return resolve({
            //         ...errorObj,
            //         message: "Items not found",
            //       });
            // }
            Cart.findOne({ User: User, savedItems: { $elemMatch: { productId } } }).then(filteredData => {
                if (!filteredData) {
                    Cart.findOne({ User: User }).exec((err, result) => {
                        if (err || !result) {
                            resolve({
                                ...errorObj,
                                message:"User not found"
                            })
                        } else {
                            result.savedItems.push({productId:productId,Qty:Qty});
                            result.save((err, doc) => {
                                if (err || !data) { 
                                    resolve({...errorObj, doc, msg: 'Try again'}) 
                                } 
                                else {
                                  resolve({doc, ...successObj, msg: 'Item added successfully'})
                                } 
                            })
                        }
                    })
                } else {
                    resolve({
                        ...errorObj,
                        msg:'Items already exist in cart'
                    })
                }
            })
           

        })
    },
    getCartItems: (data) => {
        return new Promise(async (resolve) => {
            Cart.findOne({User:data}).lean().exec(async(err, doc) => {
                if (err || !doc) {
                    return resolve({ ...errorObj, err })
                } else {
                    let result = [];
                   
                    if (doc && doc.savedItems.length > 0) {
                        result = await Promise.all(doc.savedItems.map(async (item, ind) => {
                            const data = await getProductById(item.productId)
                            if (!data.err) {
                                
                                return {...data.doc,Qty:item.Qty}
                            } else {
                                return {}
                            }
                        }));    
                    }
                    
                    return resolve({
                        ...successObj,
                        result
                    })
                   
                }
            })
        })
    },
    updateQuantity: (data) => {
        return new Promise(async (resolve) => {
            const { User, productId, Qty } = data;

            try {
                let result = await Cart.updateOne(
                    {
                        User : User,
                        "savedItems.productId": productId
                    },
                    {
                        $set: { "savedItems.$.Qty": Qty }
                    }
                );
                
                return resolve({
                    result
                })
                
            } catch (err) {
                console.log(err,'wwwwwwwwwwwwwwwwwwwwwww')
           }
        })
    },
    removeFromCart: data => {
        return new Promise(async (resolve) => {
            const { User, productId } = data;
          const result=  await Cart.updateOne(
            {
                User : User,

            },
            productId? {'$pull':{ 'savedItems':{'productId': productId }}}:{
                $set: { "savedItems": [] }
            },
            {new:true}
            );
            return resolve({
                result
            })
        })
    }
}

module.exports=x