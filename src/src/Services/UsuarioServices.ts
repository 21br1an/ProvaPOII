import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class UsuarioServices{
    constructor(){}

    async listUsuarios(email?: string){
        try{
            if (email){
                const usuario = await prisma.usuario.findUnique({
                    where:{
                        email
                    }
                });return usuario
            }
            else{
                const usuarios = await prisma.usuario.findMany();
                return usuarios
            }
        }catch(error){
            console.log(error)
            return null
        }
    }

    async createUsuario(usuario: Prisma.UsuarioCreateInput){
        try{
            const newUsuario = await prisma.usuario.create({
                data: usuario
            });
            return newUsuario
        }catch(error){
            console.log(error)
            return null
        }
    }

    async updateUsuario(email: string, usuario: Prisma.UsuarioUpdateInput){
        try{
            const updatedUsuario = await prisma.usuario.update({
                where:{
                    email
                },
                data:usuario
            });return updatedUsuario
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deleteUsuario(email: string){
        try{
            const deletedUsuario = await prisma.usuario.delete({
                where:{
                    email
                }
            });return deletedUsuario
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new UsuarioServices();