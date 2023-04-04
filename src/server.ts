import  express, {Request, Response}  from "express";
import path from "path";
import dotenv from "dotenv";
import apiRoutes from "./routes/api";

var cors = require('cors'); 


//habilitar cors
  dotenv.config();

  const server=express();
  server.use(cors()) 
  server.use(express.static(path.join(__dirname,'../public')));
  server.use(express.urlencoded({extended:true}));


  server.use('/api',apiRoutes);
  server.use(( req: Request,res: Response)=>{
    res.status(404);
    res.json({error:'NotFound'})

  })


  server.listen(process.env.PORT);