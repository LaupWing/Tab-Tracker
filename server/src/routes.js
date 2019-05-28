module.exports = (app)=>{
    app.post('/register', (req,res)=>{
        res.send({
            message: "Your user was registered! Have fun!"+ req.body.email
        })
    })
}