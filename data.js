const bcrypt = require("bcrypt")

const data={
    users:[
        {
            name:"skill",
            password:bcrypt.hashSync("hr@skill.in",8),
            isAdmin:true,
            email:"hr@skill.in",
        },
        {
            name:"qode",
            password:bcrypt.hashSync("hr@skill.in",8),
            isAdmin:true,
            email:"hr@skill.in",
        },
    ],
}
module.exports=data