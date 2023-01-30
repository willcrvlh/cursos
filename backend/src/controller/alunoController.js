const alunoController = app =>{
    app.get('/aluno', (req, res)=>{
        res.send("get aluno")
    })
}

export default alunoController