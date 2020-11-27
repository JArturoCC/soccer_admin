const { response } = require('express');
const Liga = require('../models/Liga');
const Team = require('../models/Team');
const { Fixture } = require('../helpers/fixture');
const dayjs = require('dayjs');

const getCalendar = async(req, res = response) => {

    const ligas = await Liga.find();

    const teams = await Team.find();

    if(!ligas || !teams) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

    let calendar = [];

    //Nombres de los equipos por categoria
    const nombresEquipoInfantil = [];
    const nombresEquipoJuvenil = [];
    const nombresEquipoFemenil = [];
    const nombresEquipoMixto = [];

    //Fecha en que inicia la liga dependiendo la categoria
    let fechaInicioInfantil;
    let fechaInicioJuvenil;
    let fechaInicioFemenil;
    let fechaInicioMixta;

    ligas.forEach(liga => {
        if(liga.category === '1') {
            let startDate = dayjs(liga.start_date);

            if(startDate.day() === 0) {
                fechaInicioInfantil = startDate.add(3, 'day');
            }else if(startDate.day() === 1) {
                fechaInicioInfantil = startDate.add(2, 'day');
            }else if(startDate.day() === 2) {
                fechaInicioInfantil = startDate.add(1, 'day');
            }else if(startDate.day() === 4) {
                fechaInicioInfantil = startDate.add(6, 'day');
            }else if(startDate.day() === 5) {
                fechaInicioInfantil = startDate.add(5, 'day');
            }else if(startDate.day() === 6) {
                fechaInicioInfantil = startDate.add(4, 'day');
            }  
            teams.forEach((team) => {
                if(liga.id === team.id_liga) {
                    nombresEquipoInfantil.push(team.name);
                }
            });
        }

        if(liga.category === '2') {
            fechaInicioJuvenil = liga.start_date;
            let startDate = dayjs(liga.start_date);

            if(startDate.day() === 0) {
                fechaInicioJuvenil = startDate.add(4, 'day');
            }else if(startDate.day() === 1) {
                fechaInicioJuvenil = startDate.add(3, 'day');
            }else if(startDate.day() === 2) {
                fechaInicioJuvenil = startDate.add(2, 'day');
            }else if(startDate.day() === 3) {
                fechaInicioJuvenil = startDate.add(1, 'day');
            }else if(startDate.day() === 5) {
                fechaInicioJuvenil = startDate.add(6, 'day');
            }else if(startDate.day() === 6) {
                fechaInicioJuvenil = startDate.add(5, 'day');
            }

            teams.forEach((team) => {
                if(liga.id === team.id_liga) {
                    nombresEquipoJuvenil.push(team.name);
                }
            });
        }

        if(liga.category === '3') {
            fechaInicioFemenil = liga.start_date;
            let startDate = dayjs(liga.start_date);
            
            if(startDate.day() === 0) {
                fechaInicioFemenil = startDate.add(5, 'day');
            }else if(startDate.day() === 1) {
                fechaInicioFemenil = startDate.add(4, 'day');
            }else if(startDate.day() === 2) {
                fechaInicioFemenil = startDate.add(3, 'day');
            }else if(startDate.day() === 3) {
                fechaInicioFemenil = startDate.add(2, 'day');
            }else if(startDate.day() === 4) {
                fechaInicioFemenil = startDate.add(1, 'day');
            }else if(startDate.day() === 6) {
                fechaInicioFemenil = startDate.add(6, 'day');
            }

            teams.forEach((team) => {
                if(liga.id === team.id_liga) {
                    nombresEquipoFemenil.push(team.name);
                }
            });
        }

        if(liga.category === '4') {
            fechaInicioMixta = liga.start_date;
            let startDate = dayjs(liga.start_date);

            if(startDate.day() === 0) {
                fechaInicioMixta = startDate.add(6, 'day');
            }else if(startDate.day() === 1) {
                fechaInicioMixta = startDate.add(5, 'day');
            }else if(startDate.day() === 2) {
                fechaInicioMixta = startDate.add(4, 'day');
            }else if(startDate.day() === 3) {
                fechaInicioMixta = startDate.add(3, 'day');
            }else if(startDate.day() === 4) {
                fechaInicioMixta = startDate.add(2, 'day');
            }else if(startDate.day() === 5) {
                fechaInicioMixta = startDate.add(1, 'day');
            }

            teams.forEach((team) => {
                if(liga.id === team.id_liga) {
                    nombresEquipoMixto.push(team.name);
                }
            });
        }
    });

   
    calendar.push(
        Fixture(nombresEquipoInfantil, fechaInicioInfantil, '1'),
        Fixture(nombresEquipoJuvenil, fechaInicioJuvenil, '2'),
        Fixture(nombresEquipoFemenil, fechaInicioFemenil, '3'),
        Fixture(nombresEquipoMixto, fechaInicioMixta, '4')
    )

    try {
        res.status(201).json({
            ok: true,
            calendar: calendar
        });       
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    getCalendar
}