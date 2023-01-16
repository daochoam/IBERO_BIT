import express from 'express' //ESModules
// var express = require('express');  --> common js
import Routes from './routes/Routes_1'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping',(_req, res) => {
    console.log('some pinged here')
    res.send('pong')
})

app.use('/api/route',Routes)

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)})