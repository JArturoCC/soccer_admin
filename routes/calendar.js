const { Router } = require('express');
const { getCalendar } = require('../controllers/calendar');
const { validarJWT } = require('../middlewares/validar_jwt');

const router = Router();

router.use(validarJWT);

router.get('/', getCalendar);

module.exports = router;