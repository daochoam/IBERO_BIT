import express from 'express';
//import UsersRouters from './routes/UsersRoutes'
import {App_Server} from './services/server'

function main(){
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));

    const Server = new App_Server();
    Server.listen();
}

main();