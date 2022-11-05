const bcrypt=require('bcryptjs')

const Users = [
    {
        name: "admin",
        email: "admin@admin.com",
        password: bcrypt.hashSync('1234567890', 10),
        isAdmin:true
    },
    {
        name: "Saurabh",
        email: "saurabh@saurabh.com",
        password: bcrypt.hashSync('1234890', 10),
        
    },
    {
        name: "user3",
        email: "user@user3.com",
        password: bcrypt.hashSync('123490', 10),
      
    }
    
]

module.exports =Users