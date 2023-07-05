const usuarios = [
    { id: 1, nombre: 'juan', profesion_id: 1},
    { id: 2, nombre: 'alex', profesion_id: 1},
    { id: 3, nombre: 'marcela', profesion_id: 2},

]

const profesion = {
    1: 'programador',
    2: 'diseñador'
}

function getUsuarios( callback ){
    setTimeout( ()=>{
        //Simulamos conexion a DB para obtener todos los usuarios
        callback(null, usuarios)
    }, 200)
}

function getUsuario( id, callback ){
    setTimeout( ()=>{
        //Teniendo todos los usuarios obtenemos el usuario a buscar
        usuario = usuarios.filter((usuario) => usuario.id === id)[0]
        callback(null, usuario )
    },200)
}

function getProfesion(id, callback){
    setTimeout(()=>{
        callback( null, profesion[id] )
    }, 200)
}

//getUsuarios( (err, usuarios ) => console.log( usuarios) )


getUsuarios( (err, usuarios) => {
    
    const alexId = usuarios[1].id

    getUsuario( alexId, ( err, usuario )=>{
        const profesionId = usuario.profesion_id

        getProfesion( profesionId, (err, profesion) => {
            console.log( `La profesion de alejandro es: ${profesion}`)
        })
    })
})

console.log("Fin del programa")