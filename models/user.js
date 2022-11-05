const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },

}, {
    timeStamps: true
}
);

userSchema.methods.generateHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
userSchema.methods.validPassword = function(password){
   return bcrypt.compareSync(password, this.password)
}

      

const User = mongoose.model('User', userSchema)
module.exports= User;