//

const fs = require('fs');

let ListadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(ListadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new err('no se pudo guardar', err); /// throw: lanza una excepcion defina por el usuario esdecir aqui el caso es si no hay un err

    });

}
const cargarDB = () => {

    try {

        ListadoPorHacer = require('../db/data.json');

    } catch (error) {
        ListadoPorHacer = [];
    }

}


const crear = (descripcion) => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    };

    ListadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getlistado = () => {
    cargarDB();
    return ListadoPorHacer;
};


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = ListadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        ListadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}


const borrar = (descripcion) => {

    cargarDB()

    let nuevoListado = ListadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (ListadoPorHacer.length === nuevoListado.length) {
        return false
    } else {
        ListadoPorHacer = nuevoListado
        guardarDB();
        return true
    }

}


module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}