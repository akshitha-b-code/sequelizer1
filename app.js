const express=require('express');
const {router} = require('./routes/router');

const {dbConnection} = require('./config/dbConnect');

const app=express();

app.use('/',router);


app.listen(3001,()=>{
    console.log(`Server is running on port http://localhost:3001`);
    dbConnection();
})