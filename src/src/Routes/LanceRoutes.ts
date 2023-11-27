import LanceController from "../Controllers/LanceController";
import { Router } from "express";

const LanceRouter = Router();

LanceRouter.get('/lance', LanceController.listUsuarios)

LanceRouter.post('/lance', LanceController.createUsuario);

LanceRouter.put('/lance', LanceController.updateUsuario);

LanceRouter.delete('/lance', LanceController.deleteUsuario);

export default LanceRouter;