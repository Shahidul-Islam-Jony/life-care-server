const mongoose = require('mongoose');
require('dotenv').config();

const getConnectionURI = () =>{         // setup mongodb uri with user name and password
    let connectionURI;
    connectionURI = process.env.DB_URI
    connectionURI = connectionURI.replace('<username>',process.env.DB_USER)
    connectionURI = connectionURI.replace('<password>',process.env.DB_PASSWORD)

    return connectionURI;
}

const connectDB = async()=>{
    console.log('Connecting to database....');
    const uri = getConnectionURI();     //calling mongodb uri
    await mongoose.connect(uri,{dbName:'lifeCare'})
    console.log('Connected to database');
}

module.exports = connectDB;