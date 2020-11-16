const  { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {
    //x-token headers
    //extraigo el jwt de los headers
    const token = req.header('x-token');
    
    //Validando token
    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        })
    }

    try {
        const { uid, user_name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = uid;
        req.user_name = user_name;
        
    } catch (error) {
        return response.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    }

    next();
}

module.exports = {
    validarJWT
}