const fs = require('fs');

const crearArchivo = async(numero = 5, listar = false, hasta = 1) => {
    try{
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${numero} x ${i} = ${numero * i}\n`
        }

        if(listar){
            console.log('=================')
            console.log('TABLA DEL', numero)
            console.log('=================')
            
            console.log(salida)
        }
        
        fs.writeFileSync(`./salida/tabla-del-${numero}.txt`, salida)
        return `tabla-del-${numero}.txt`
    }catch(err){
        throw err;
    }
}


module.exports = {
    crearArchivo
}