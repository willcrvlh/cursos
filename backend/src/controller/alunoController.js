import alunoModel from "../model/alunoModel.js";

const alunoController = app =>{
    app.get('/aluno', async (req,res)=>{
        try {
            const aluno = await alunoModel.findAll();
            res.status(200).json(aluno)
        } catch (error) {
            res.status(400).json({
                "error": error
            })
        }
    })

    app.get('/aluno/:matricula', async (req,res)=>{
        const matricula = req.params.matricula

        if(!alunoModel){
            res.status(422).json({
                "error":"Aluno não existe"
            })
        }
        try {
            const aluno = await alunoModel.findByPk(matricula);
            res.status(200).json(aluno)
        } catch (error) {
            res.status(500).json({
                "error": error
            })
        }
    })

    app.post('/aluno', async (req,res)=>{
        await alunoModel.create(req.body)
        try {
            return res.status(201).json({
                error: false,
                "msg": "Aluno cadastrado com sucesso"
            })
        } catch (error) {
            return res.status(400).json({
                "error": error
            })
        }
    })
    app.delete('/aluno/:matricula',async  (req, res)=>{
        const matricula = req.params.matricula
        const aluno = await alunoModel.destroy({where : {matricula: matricula}})
        if(!aluno){
            res.status(422).json({
                "erro" : "Aluno não encontrado"
            })
            return;
        }
        try {
            await alunoModel.destroy({where: {matricula: matricula}});
            res.status(200).json({
                "msg":"Aluno deletado com sucesso"
            })
            console.log("aluno deletado com sucesso")
        } catch (error) {
            res.status(500).json({
                "erro": "deu merda em algo"
            })
        }
    })
}

export default alunoController