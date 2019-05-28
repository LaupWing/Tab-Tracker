const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const morgan     = require('morgan')
const port       = 8081

const app = express()
// Cors is for security reasons so that other clients can connect to the server safely
// Morgan is used to log the server activty in your console
app
    .use(morgan('combined'))
    .use(bodyParser.json())
    .use(cors())
    // Post method will be handled in the client in the folder services > Auth and API
    .post('/register', (req,res)=>{
        res.send({
            message: "Your user was registered! Have fun!"+ req.body.email
        })
    })
    .listen(process.env.PORT||port)