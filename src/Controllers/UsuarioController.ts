import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioService from "../Services/UsuarioServices";

class UsuarioController{

    constructor(){}

    async createUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const newUsuario = await UsuarioService.createUsuario(dados)
            res.status(200).json({
                status: 'ok',
                newUsuario: newUsuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Insira os dados'
            })
        }

    }

    async listUsuarios(req: Request, res: Response){
        const users = UsuarioService.listUsuarios();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async updateUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;

        if(dados.email !== "" && dados.nome !== ""){
            const updatedUsuario = await UsuarioService.updateUsuario(dados.email, dados)
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
        const usuario = UsuarioService.deleteUsuario = req.body;

        if(usuario.email !== ""){
            const deletedUsuario = await UsuarioService.deleteUsuario(usuario.email)
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

export default new UsuarioController();