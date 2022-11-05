const Products =require('../models/product')
const checkObj = require('../config/setting')

const{errorObj,successObj} = checkObj

const x = {
    getAllProducts: (data) => {
        return new Promise(async (resolve) => {
            Products.find({}).lean().exec((err, doc) => {
               
                if (err || !doc) {
                    return resolve({...errorObj,err})
                } else {
                    resolve({...successObj,data:doc})
                }
            })
        })
    },
    getProductById: (_id) => {
        return new Promise(async (resolve) => {
            Products.findOne({ _id }).lean().exec((err, doc) => {
                if (err || !doc) {
                    return resolve({ ...errorObj, err })
                } else {
                    return resolve({...successObj,doc})
                }
            })
        })
    }
}
module.exports= x