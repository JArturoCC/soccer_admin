const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');
const { validarJWT } = require('../middlewares/validar_jwt');

const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

router.post(
    '/new',
    [
        check('user_name', 'El nombre de usuario es obligatorio').not().isEmpty(),
        check('password', 'El password debe de ser minimo de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario
);

router.post(
    '/', 
    [
        check('user_name', 'El nombre de usuario es obligatorio').not().isEmpty(),
        check('password', 'El password debe de ser minimo de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario);

router.get('/renew', validarJWT, revalidarToken);

module.exports = router;



