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
    .get('/status', (req,res)=>{
        res.send({
            message: "hello world"
        })
    })
    .listen(process.env.PORT||port)