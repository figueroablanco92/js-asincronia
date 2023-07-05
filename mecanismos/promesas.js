const usuarios = [
    { id: 1, nombre: 'juan', profesion_id: 1},
    { id: 2, nombre: 'alex', profesion_id: 1},
    { id: 3, nombre: 'marcela', profesion_id: 2},

]

const profesion = {
    1: 'programador',
    2: 'diseñador'
}


function getUsuarios( ){
    return new Promise( ( resolved, reject ) =>{
        setTimeout( () => {
            resolved( usuarios )
        }, 200)
    })
}

function getUsuario( id ){
    return new Promise( (resolved, reject)=>{
        setTimeout( ()=>{
            resolved( usuarios.filter( (usuario) => usuario.id ===id )[0])
        }, 200)
    })
}

function getProfesion( id){
    if( typeof id !== 'number'){
        return Promise.reject(`Error, el valor "${id}" ingresado no es un número`)
    }

    return new Promise( (resolved, reject) => {
        setTimeout( ()=> {
            resolved( profesion[id])
        }, 200)
    })
}


getUsuarios()
    .then( ( usuarios ) => getUsuario( usuarios[1].id) )
    .then( (usuario ) => getProfesion( usuario.profesion_id) )
    .then( ( profesion ) => console.log(`La profesion es ${profesion}`))
    .catch( (error) => console.log( error ))