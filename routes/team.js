const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');
const { validarJWT } = require('../middlewares/validar_jwt');
const { getTeams, crearTeam, actualizarTeam, eliminarTeam } = require('../controllers/team');

const router = Router();

router.use(validarJWT);

router.get('/', getTeams);

router.post(
    '/',
    [
        check('name', 'El nombre del equipo es obligatorio').not().isEmpty(),
        check('id_liga', 'El id de la liga debe ser obligatorio').not().isEmpty(),
        validarCampos
    ], 
    crearTeam);

router.put(
    '/:id',
    [
        check('name', 'El nombre del equipo es obligatorio').not().isEmpty(),
        check('id_liga', 'El id de la liga debe ser obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarTeam);

router.delete('/:id', eliminarTeam);

module.exports = router;