"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import UsersRouters from './routes/UsersRoutes'
const server_1 = require("./services/server");
function main() {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    const Server = new server_1.App_Server();
    Server.listen();
}
main();
