const express     = require('express')
const bodyParser  = require('body-parser')
const cors        = require('cors')
const morgan      = require('morgan')
const port        = 8081
const {sequelize} = require('./models')
const config      = require('./config/config')

const app = express()
// Cors is for security reasons so that other clients can connect to the server safely
// Morgan is used to log the server activty in your console
app
    .use(morgan('combined'))
    .use(bodyParser.json())
    .use(cors())
    // Post method will be handled in the client in the folder services > Auth and API

require('./routes')(app)
    
// Sequelize.sync() connect to any database that is connected to sequelize
// Create the tables that doesnt exist
sequelize.sync()
    .then(()=>{
        app.listen(config.port)
        console.log(`Server is listenen on port${config.port}`)
    })