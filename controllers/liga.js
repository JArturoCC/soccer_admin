const { response } = require('express');
const Liga = require('../models/Liga');

const getLigas = async(req, res = response) => {

    const ligas = await Liga.find();

    res.json({
        ok: true,
        ligas
    })
}

const crearLiga = async(req, res = response) => {

    const liga = new Liga(req.body);

    try {
        const ligaGuardada = await liga.save(); 

        res.status(201).json({
            ok: true,
            liga: ligaGuardada
        });       
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarLiga = async(req, res = response) => {

    const ligaId = req.params.id;

    const liga = await Liga.findById(ligaId);

    try {
        if(!liga) {
            return res.status(404).json({
                ok: false,
                msg: 'Liga no encontrada'
            }); 
        }

        const nuevaLiga = {
            ...req.body
        }

        const ligaActualizada = await Liga.findByIdAndUpdate(ligaId, nuevaLiga, {new: true});

        res.json({
            ok: true,
            liga: ligaActualizada
        }); 

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        }); 
    }
}

const eliminarLiga = async(req, res = response) => {
    const ligaId = req.params.id;

    const liga = await Liga.findById(ligaId);

    try {
        if(!liga) {
            return res.status(404).json({
                ok: false,
                msg: 'Liga no encontrada'
            }); 
        }

        await Liga.findByIdAndDelete(ligaId);

        return res.json({
            ok: true,
            msg: 'Liga eliminada exitosamente'
        }); 

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        }); 
    }
}

module.exports = {
    getLigas,
    crearLiga,
    actualizarLiga,
    eliminarLiga
}