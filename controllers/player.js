const { response } = require('express');
const Player = require('../models/Player');
const Team = require('../models/Team');

const getPlayers = async(req, res = response) => {

    const players = await Player.find();

    res.json({
        ok: true,
        players
    })
}

const crearPlayer = async(req, res = response) => {

    const teamId = req.params.id;
    
    const team = await Team.findById(teamId);

    const player = new Player(req.body);

    try {
        if(!team) {
            return res.status(404).json({
                ok: false,
                msg: 'Equipo no encontrado'
            }); 
        }       
        
        player.id_team = req.params.id;

        const playerGuardado = await player.save(); 

        res.status(201).json({
            ok: true,
            team: playerGuardado
        });       
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarPlayer = async(req, res = response) => {

    const teamId = req.body.id_team;

    const team = await Team.findById(teamId);

    const playerId = req.params.id;

    const player = await Player.findById(playerId);

    try {
        if(!player) {
            return res.status(404).json({
                ok: false,
                msg: 'Jugador no encontrado'
            }); 
        }

        if(!team) {
            return res.status(404).json({
                ok: false,
                msg: 'Equipo no encontrado'
            }); 
        }

        const nuevoPlayer = {
            ...req.body
        }

        const playerActualizado = await Player.findByIdAndUpdate(playerId, nuevoPlayer, {new: true});

        res.json({
            ok: true,
            player: playerActualizado
        }); 

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        }); 
    }
}

const eliminarPlayer = async(req, res = response) => {

    const playerId = req.params.id;

    const player = await Player.findById(playerId);

    try {
        if(!player) {
            return res.status(404).json({
                ok: false,
                msg: 'Jugador no encontrado'
            }); 
        }

        await Player.findByIdAndDelete(playerId);

        return res.json({
            ok: true,
            msg: 'Jugador eliminado exitosamente'
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
    getPlayers,
    crearPlayer,
    actualizarPlayer,
    eliminarPlayer
}