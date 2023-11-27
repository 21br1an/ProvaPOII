import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceServices from "../Services/LanceServices";
import UsuarioServices from "../Services/UsuarioServices";

class LanceController{

    constructor(){}

    async createUsuario(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.comprador !== "" && dados.leilao !== "" && dados.valor !== null){
            const newLance = await LanceServices.createLance(dados)
            res.status(200).json({
                status: 'ok',
                newUsuario: newLance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Insira os dados'
            })
        }

    }

    async listUsuarios(req: Request, res: Response){
        const users = UsuarioServices.listUsuarios();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async updateUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;

        if(dados.email !== "" && dados.nome !== ""){
            const updatedUsuario = await UsuarioServices.updateUsuario(dados.email, dados)
            res.status(200).json({
                status: 'ok',
                updatedUsuario: updatedUsuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Insira os dados'
            })
        }
    }

    async deleteUsuario(req: Request, res: Response){
        const usuario = UsuarioServices.deleteUsuario = req.body;

        if(usuario.email !== ""){
            const deletedUsuario = await UsuarioServices.deleteUsuario(usuario.email)
            res.status(200).json({
                status: 'ok',
                deletedUsuario: deletedUsuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Insira os dados corretamente'
            })

        }
    }
}

export default new LanceController();