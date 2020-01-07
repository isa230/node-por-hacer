//

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la nueva tarea por hacer'
}


const completado = {
    default: true,
    alias: 'c',
    desc: 'tarea ya completada'
};


const argv = require('yargs')
    .command('crear', 'Crea una tarea nueva', {
        descripcion

    })

.command('Actualizar', 'Actualizar una tarea', {
    descripcion,
    completado
})

.command('borrar', 'borrar una tarea', {
    descripcion


})



.help()
    .argv


module.exports = {
    argv
}