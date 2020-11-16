const jwt = require('jsonwebtoken');

//Se trabaja con una promesa si se cumple has resolve si no reject
const generarJWT = (uid, userName) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, userName };
        //sign para firmar el token
        //Recibe 4 args: 
        //el payload, una palabra secreta (Secret o PrivateKey), cuando expira, y 
        //un callback que se ejecutara despues de firmar
        // en caso de que no se pueda firmar envia err si no el token
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) => {
            if(err) {
                console.log(err)
                reject('No se pudo generar el token')
            }
            resolve(token);
        });
    })
}

module.exports = {
    generarJWT
}