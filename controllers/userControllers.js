const User = require('../models/user')
const checkObj = require('../config/setting')
const jwt=require('jsonwebtoken')
const { errorObj, successObj } = checkObj
const secret = process.env.SECRET_KEY;
const validator = require('email-validator');
const Cart = require('../models/cartModel');
const x = {
    login: (data) => new Promise((resolve) => {
        try {
            const { email, password } = data;
            
        const error = "wrong email or password";
        User.findOne({email}).exec((err, user) => {
            if (!user) {
                
            return resolve({message: error, ...errorObj});
          }
          if (!user.validPassword(password)) {
            return resolve({...errorObj, message: error});
          }
    
          const JWTToken = jwt.sign(
            {
                _id: user._id,
                email: user.email,
                name: user.name,
                isAdmin:user.isAdmin
              },
              'secret',
              {
                expiresIn: "30 days",
              }
            );
    
            return resolve({
              ...successObj,
              token: JWTToken,
              userInfo: {
                _id: user._id,
                email: user.email,
                isAdmin: user.isAdmin,
                name: user.name,
              },
            });
          });
        } catch (err) {
           throw err
        }
        
    }),
    
    add: (data) => {
        return new Promise(async (resolve) => {
          const {
            email,
            password,
            name,
          } = data;
           
            if (!name) {
                return resolve({
                    ...errorObj,
                    message: "Please enter your name",
                  });   
            }
    
          if (!email || !password) {
            return resolve({
              ...errorObj,
              message: "Please enter email and password",
            });
          }
    
          if (!validator.validate(email)) {
            return resolve({...errorObj, message: "Invalid Email Address"});
          }
         
          const user = new User();
          user.email = email;
          user.password = user.generateHash(password);
          user.name = name;
          
          

              user.save(async(err, doc) => {
                  if (err) {
                   
                  return resolve({
                    ...errorObj,
                    message: "Email already exist.",
                  });
                }
              
                const cart = new Cart();
                cart.User = doc._id;
                cart.savedItems = [];
                
               const data=await cart.save()
                resolve({
                  ...successObj,
                  message:  `user added successfully`,
                  userInfo: {
                    _id: doc._id,
                    email: doc.email,
                    name: doc.name,
                  },
                });
            
            } )
          });
        
  },
  profileById: (_id) => new Promise(async(resolve) => {
    User.findOne({ _id }).lean().exec((err, doc) => {
      if (err || !doc) {
        resolve({
          ...errorObj,
          message:'User not found'
          })
      }
      else {
        resolve({
          ...successObj,
          data:doc
        })
      }
      })
  }),
  updateProfile: (data) => new Promise(async (resolve) => {
    let {_id,name} = data
    User.findOne({_id}).exec((err, result) => {
      
      if (err || !result) {
        resolve({
          ...errorObj,
          message:'User not found'
          })
      }
      console.log(result,'before setting')
      result.name = name
      console.log(result,'after setting')
      result.save((err, doc) => {
        if (err || !data) { 
            resolve({...errorObj, err, msg: 'Try again'}) 
        } 
        else {
          resolve({doc, successObj, msg: 'User Updated'})
        }
})

    })
  })
}
module.exports=x