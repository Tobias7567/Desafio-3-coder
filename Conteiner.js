const { Console } = require("console");
const fs = require("fs");
class Conteiner {
  constructor(ruta) {
    this.ruta = ruta;
  }
  async save(obj) {
    try {
      let data = await fs.promises.readFile(this.ruta, "utf-8");
      let dataParse = JSON.parse(data);
      if (dataParse.length) {
        await fs.promises.writeFile(
          this.ruta,
          JSON.stringify(
            [...dataParse, { ...obj, id: dataParse.length + 1 }],
            null,
            2
          )
        );
      } else {
        await fs.promises.writeFile(
          this.ruta,
          JSON.stringify([{ ...obj, id: dataParse.length + 1 }], null, 2)
        );
      }
      return console.log(`el id asignado es ${dataParse.length + 1}`);
    } catch (err) {
      console.log(err);
    }
  }

  async  Read() {
    try {
      let data = await fs.promises.readFile(this.ruta, "utf-8");
      let dataParse = JSON.parse(data);
   return dataParse
     
    } catch (error) {
      console.log(error)
    }
  }
  async readRamdom() {
    try {
  
      let data = await fs.promises.readFile(this.ruta, "utf-8");
      let dataParse = JSON.parse(data);
      let max = dataParse.length
      let min = 0
      let id =  Math.ceil(Math.random() * (max - min))
      console.log(id)
      let producto = dataParse.find((producto) => producto.id === id);
      if (producto) {
        return producto
      
      } else {
        console.log("archivo no encontrado");
      }
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports = Conteiner;
