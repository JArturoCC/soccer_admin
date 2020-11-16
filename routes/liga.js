const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');
const { validarJWT } = require('../middlewares/validar_jwt');
const { getLigas, crearLiga, actualizarLiga, eliminarLiga } = require('../controllers/liga');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use(validarJWT);

router.get('/', getLigas);

router.post(
    '/',
    [
        check('name', 'El nombre de la liga es obligatorio').not().isEmpty(),
        check('start_date', 'La fecha de inicio es obligatoria').custom(isDate),
        check('category', 'La categoria es obligatoria').not().isEmpty(),
        check('age', 'La edad es obligatoria').not().isEmpty(),
        check('points_for_winning', 'Los puntos por victoria es obigatorio').not().isEmpty(),
        check('points_for_tie', 'Los puntos por empate es obigatorio').not().isEmpty(),
        check('points_for_loss', 'Los puntos por derrota es obigatorio').not().isEmpty(),
        validarCampos
    ], 
    crearLiga);

router.put(
    '/:id',
    [
        check('name', 'El nombre de la liga es obligatorio').not().isEmpty(),
        check('start_date', 'La fecha de inicio es obligatoria').custom(isDate),
        check('category', 'La categoria es obligatoria').not().isEmpty(),
        check('age', 'La edad es obligatoria').not().isEmpty(),
        check('points_for_winning', 'Los puntos por victoria es obigatorio').not().isEmpty(),
        check('points_for_tie', 'Los puntos por empate es obigatorio').not().isEmpty(),
        check('points_for_loss', 'Los puntos por derrota es obigatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarLiga);

router.delete('/:id', eliminarLiga);

module.exports = router;