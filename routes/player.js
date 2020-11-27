const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');
const { validarJWT } = require('../middlewares/validar_jwt');
const { getPlayers, crearPlayer, actualizarPlayer, eliminarPlayer, getPlayersByTeam } = require('../controllers/player');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use(validarJWT);

router.get('/', getPlayers);

router.get('/:id', getPlayersByTeam);

router.post(
    '/:id',
    [
        check('name', 'El nombre del jugador es obligatorio').not().isEmpty(),
        check('surnames', 'Los apellidos del jugador es obligatorio').not().isEmpty(),
        check('birthdate', 'La fecha de nacimiento del jugador es obligatoria').custom(isDate),
        check('jersey_number', 'El número de la camiseta es obligatorio').not().isEmpty(),
        validarCampos
    ], 
    crearPlayer);

router.put(
    '/:id',
    [
        check('name', 'El nombre del jugador es obligatorio').not().isEmpty(),
        check('surnames', 'Los apellidos del jugador es obligatorio').not().isEmpty(),
        check('birthdate', 'La fecha de nacimiento del jugador es obligatoria').custom(isDate),
        check('jersey_number', 'El número de la camiseta es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarPlayer);

router.delete('/:id', eliminarPlayer);

module.exports = router;