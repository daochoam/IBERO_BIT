import { Request, Response } from "express";

export const getUsers = (_req: Request, res: Response) => {
    res.send('users')
}

// ADD NEW USER POST ACTION

export const NewUser = (req: Request, res: Response) =>{
    userData.push({
        Name: req.body.name,
        CC: req.body.cc,
        LastName: req.body.lastName,
        Age: req.body.age,
        Address: req.body.address,
        Phone: req.body.phone
    })
    res.json({state:true, message:"Usuario Guardado"})
}

export const ListUsers = (_req: Request, res: Response) => {
    res.json({state:true,datos:userData})
}

