const { response } = require('express');
const Team = require('../models/Team');
const Liga = require('../models/Liga');

const getTeams = async(req, res = response) => {

    const teams = await Team.find();

    res.json({
        ok: true,
        teams
    })
}

const crearTeam = async(req, res = response) => {

    const ligaId = req.body.id_liga;
    
    const liga = await Liga.findById(ligaId);

    const team = new Team(req.body);

    try {
        if(!liga) {
            return res.status(404).json({
                ok: false,
                msg: 'Liga no encontrada'
            }); 
        }        

        const teamGuardado = await team.save(); 

        res.status(201).json({
            ok: true,
            team: teamGuardado
        });       
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarTeam = async(req, res = response) => {

    const ligaId = req.body.id_liga;

    const liga = await Liga.findById(ligaId);

    const teamId = req.params.id;

    const team = await Team.findById(teamId);

    try {
        if(!team) {
            return res.status(404).json({
                ok: false,
                msg: 'Equipo no encontrado'
            }); 
        }

        if(!liga) {
            return res.status(404).json({
                ok: false,
                msg: 'Liga no encontrada'
            }); 
        }

        const nuevoTeam = {
            ...req.body
        }

        const teamActualizado = await Team.findByIdAndUpdate(teamId, nuevoTeam, {new: true});

        res.json({
            ok: true,
            team: teamActualizado
        }); 

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        }); 
    }
}

const eliminarTeam = async(req, res = response) => {
    const teamId = req.params.id;

    const team = await Team.findById(teamId);

    try {
        if(!team) {
            return res.status(404).json({
                ok: false,
                msg: 'Equipo no encontrado'
            }); 
        }

        await Team.findByIdAndDelete(teamId);

        return res.json({
            ok: true,
            msg: 'Equipo eliminado exitosamente'
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
    getTeams,
    crearTeam,
    actualizarTeam,
    eliminarTeam
}