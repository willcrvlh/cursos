import express from 'express';
import poloController from './controller/poloController.js';
import poloModel from './model/poloModel.js';
import db from '../src/database/db.js'
import alunoController from './controller/alunoController.js';

const app = express(); 
const port = 5500
app.use(express.json())

poloController(app)
alunoController(app)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});