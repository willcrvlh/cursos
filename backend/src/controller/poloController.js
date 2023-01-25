const poloController = app =>{
    app.get('/polo', (req,res)=>{
        res.send("get")
    })
    app.post('/polo', (req,res)=>{
        res.send("post")})
}

export default poloController