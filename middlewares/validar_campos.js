const { response } = require('express');
const { validationResult } = require('express-validator');

//next es una funcion que se manda a llamar si todo se ejecuta correctamente
const validarCampos = (req, res = response, next) => {
    //Manejo de errores
    const errors = validationResult(req);
    //Si hay errores...
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    return next();
}

module.exports = {
    validarCampos
}