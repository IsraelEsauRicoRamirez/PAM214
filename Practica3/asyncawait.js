function simularPeticionAPI()
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamnete");
        } , 5000);// Simula una espera de 5 segundos
    });
        
   
}

async function ObtenerDatos() 
{
    try {
    const resultado = await simularPeticionAPI(); 
    console.log(resultado); 
  } catch (error) {
    console.error(error);
  }
}
ObtenerDatos();