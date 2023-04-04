import  {Request, Response} from 'express';

import { Phrase } from '../models/Phrase';

export const ping=(req:Request, res:Response)=>{
    res.json({pong:true});
}


export const listPhrases=async (req:Request, res:Response)=>{
    let list = await Phrase.findAll();
    console.log('nada?')
    res.json(list)
}

export const GetPhrase=async (req:Request, res:Response)=>{

    let {id}  = req.params;
    let phrase = await Phrase.findByPk(id);
    if(phrase){
        res.json({phrase})
    }else{
        res.json({error:'Phrase not found'})
    }
    console.log('nada?')
    
}

export const DelPhrase=async (req:Request, res:Response)=>{

    let {id}  = req.params;
    let phrase = await Phrase.destroy(
        {where:{
            id:id
        }}
    );
    if(phrase){
        // res.json({"deletado":"super"})
       return  res.json({"resp":id})
    }else{
        res.json({error:'Phrase not found'})
    }
    // return  res.json(id)
    
}

export const createPhrase=async (req:Request, res:Response)=>{
    let {author, txt}=req.body;
    let newPhrase=await Phrase.create({
        author,txt
    })
    res.json({id:newPhrase.id, author:newPhrase.author})
}


export const UpdatePhrase=async (req:Request, res:Response)=>{

    let {id}  = req.params;
    let {author, txt}=req.body;
    let phrase = await Phrase.findByPk(id);
    if(phrase){
        phrase.author=author;
        phrase.txt=txt;
        await phrase.save();
        res.json({phrase})
        
    }else{
        res.json({error:'Phrase not found'})
    }
    console.log('nada?')
    
}
