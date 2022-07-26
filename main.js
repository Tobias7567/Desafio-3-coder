const Conteiner = require("./Conteiner");

const conteiner = new Conteiner("./Trabajo.txt")
const express = require('express')
const app = express()
conteiner.Read() 
conteiner.readRamdom()

app.get('/',(req, res) => {
   
    res.send('bienvenido')
})
app.get('/productos', async (req, res) => {
   let array = await conteiner.Read()
    res.send(array)
})
app.get('/productosRamdom', async (req, res) => {
    let array1 = await conteiner.readRamdom()
    res.send(array1)
})
const PORT = 9300
const server = app.listen(PORT , ()=>{
    console.log(`some text ${server.address().port}`)

})
server.on('error' , err => console.log(err))






