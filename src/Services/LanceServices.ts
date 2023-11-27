import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LanceServices{
    constructor(){}

    async listLances(emailDono?: string){
        try{
            if (emailDono){
                const lance = await prisma.lance.findUnique({
                    where:{
                        emailDono
                    }
                });return lance
            }
            else{
                const lances = await prisma.lance.findMany();
                return lances
            }
        }catch(error){
            console.log(error)
            return null
        }
    };

    async createLance(lance: Prisma.LanceCreateInput){
        try{
            const newLance = await prisma.lance.create({
                data: lance
            });
            return newLance
        }catch(error){
            console.log(error)
            return null
        }
    }
    
    async updateLance(emailDono: string, lance: Prisma.LanceUpdateInput){
        try{
            const updatedLance = await prisma.lance.update({
                where:{
                    emailDono
                },
                data:lance
            });return updatedLance
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deleteLance(emailDono: string){
        try{
            const deletedLance = await prisma.lance.delete({
                where:{
                    emailDono
                }
            });return deletedLance
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new LanceServices();