function verificarUsuario(usuario)
{
    return new Promise((resolve, reject) =>
    {
        if(usuario === "admin")
        {
            resolve("Acceso concedido")
        }else{
            reject("Acceso denegado")
        }
    });
}


// Usar .then() y .catch() para manejar el resultado
verificarUsuario("admin")
.then(res => console.log(res))//acceso consedido
.catch(err => console.error(err));

verificarUsuario("Ivan")
.then(res => console.log(res))
.catch(err => console.error(err));//acceso denegado
