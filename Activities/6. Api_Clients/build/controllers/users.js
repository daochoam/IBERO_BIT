"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsers = exports.NewUser = exports.getUsers = void 0;
const getUsers = (_req, res) => {
    res.send('users');
};
exports.getUsers = getUsers;
// ADD NEW USER POST ACTION
const NewUser = (req, res) => {
    userData.push({
        Name: req.body.name,
        CC: req.body.cc,
        LastName: req.body.lastName,
        Age: req.body.age,
        Address: req.body.address,
        Phone: req.body.phone
    });
    res.json({ state: true, message: "Usuario Guardado" });
};
exports.NewUser = NewUser;
const ListUsers = (_req, res) => {
    res.json({ state: true, datos: userData });
};
exports.ListUsers = ListUsers;
