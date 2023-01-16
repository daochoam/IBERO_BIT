import express from 'express';
import * as UsersControllers from "../controllers/users";
import * as UserValue from "../validators/users";

const app = express();

app.post('/userSave', 
    UserValue.validateUsers, 
    UserValue.validateResult,
    UsersControllers.NewUser)

app.post('/user/list', UsersControllers.ListUsers)

