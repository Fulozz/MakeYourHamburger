const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()



const app = express();

const port = 3000;



// Config Json response
app.use(express.json());



// Credenciais de login
var dbUser = process.env.DB_USER
var dbPassword = process.env.DB_PASS

mongoose
.connect(`mongodb+srv://${dbUser}:${dbPassword}@makeyourburger.cc2phq9.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {app.listen(3000); console.log("Conectou ao banco!")})
.catch((err)=> console.log(err));