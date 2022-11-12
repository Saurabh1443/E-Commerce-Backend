const bcrypt=require('bcryptjs')

const Users = [
    {
        name: "admin",
        email: "admin@admin.com",
        password: bcrypt.hashSync('1234567890', 10),
        isAdmin:true
    },
    
    
]

module.exports =Users