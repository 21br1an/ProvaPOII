import express from 'express';
import MainRouter from './Routes/MainRoutes';
import UsuarioRouter from './Routes/UsuarioRoutes';
import LanceRouter from './Routes/LeilaoRoutes';
import LeilaoRouter from './Routes/LanceRoutes';


const app = express();
app.use(express.json());

app.use(MainRouter);
app.use(UsuarioRouter);
app.use(LanceRouter);
app.use(LeilaoRouter);


app.listen(3000, function(){
    console.log("Server running on port 3000");
})