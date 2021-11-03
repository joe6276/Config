require("dotenv").config()

let config = {
    server:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,  
   
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000

    },
    options: {
        encrypt:true ,
        enableArithAbort: true,
        trustServerCertificate: true
     }
}

module.exports= config 




// const assert = require("assert")
//  	const {
//  	PORT,
//  	HOST,
//  	HOST_URL,
//  	SQL_USER,
//  	SQL_PASSWORD,
//  	SQL_DATABASE,
//  	SQL_SERVER,
//  	SQL_ENCRYPT
//  	} = process.env;
//  	const sqlEncrypt = process.env.SQL_ENCRYPT === "true";
 	 
//  	assert(PORT, "PORT is required");
//  	assert(HOST, "HOST is required");
 	 
//  	module.exports = {
//  	port: PORT,
//  	host: HOST,
//  	url: HOST_URL,
//  	sql:{
//  	server: SQL_SERVER,
//  	database: SQL_DATABASE,
//  	user: SQL_USER,
//  	password: SQL_PASSWORD,
//  	options:{
//  	encrypt: sqlEncrypt,
//  	enableArithAbort: true
//  	}
//  	}
//  	};