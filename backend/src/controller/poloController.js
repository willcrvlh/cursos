import poloModel from "../model/poloModel.js" 

const poloController = app =>{
    app.get('/polo', async (req,res)=>{
        try {
            const polo = await poloModel.findAll();
            res.status(200).json(polo)
        } catch (error) {
            res.status(400).json({
                "error": error
            })
        }
    })

    app.post('/polo',async (req,res)=>{
        await poloModel.create(req.body)
        try {
            return res.status(201).json({
                error: false,
                "msg": "Polo criado com sucesso"
            })
        } catch (error) {
            return res.status(400).json({
                "error": error
            })
        }
    })
}

export default poloController