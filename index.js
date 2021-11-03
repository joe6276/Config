
const mssql= require('mssql')
const config = require('./config/db')

const user=require('./controller/users')

mssql.connect(config).then(pool =>{
    if(pool.connected){
        console.log("connected")   

      
    }
}).catch(e=>console.log(e))


user.getUsers().then(result => {
    console.log( result[0])
})