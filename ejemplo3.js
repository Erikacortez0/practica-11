//funcion que recibe datos de un usuario y separa el resto de la informacion

function procesarUsuario(nombre,edad, ...OtrooDatos) {
    let usuarioFormateado = {
        nombre,
        edad,
        infoAdicional: {...OtrooDatos}
    };
    return usuarioFormateado;
}

let usuario = procesarUsuario("erika", 21, "ingenieria", "El salvador", "marzo 2024")

console.log(usuario);