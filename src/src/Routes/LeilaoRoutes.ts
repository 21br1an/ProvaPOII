import LeilaoController from "../Controllers/LeilaoController";
import { Router } from "express";

const LeilaoRouter = Router();

LeilaoRouter.get('/leilao', LeilaoController.listUsuarios)

LeilaoRouter.post('/leilao', LeilaoController.createUsuario);

LeilaoRouter.put('/leilao', LeilaoController.updateUsuario);

LeilaoRouter.delete('/leilao', LeilaoController.deleteUsuario);

export default LeilaoRouter;