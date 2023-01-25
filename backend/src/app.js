import express from 'express';
import poloController from './controller/poloController.js';

const app = express(); 
const port = 5500

poloController(app)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});