
function Fixture (nombresEquipo, fechaInicio, categoria) {
    let totalEquipos = nombresEquipo.length;
    if(totalEquipos === 4) {
        return Equipos4(nombresEquipo, fechaInicio, categoria);
    }
    if(totalEquipos === 5) {
        return Equipos5(nombresEquipo, fechaInicio, categoria);
    }
    if(totalEquipos === 6) {
        return Equipos6(nombresEquipo, fechaInicio, categoria);
    }
    if(totalEquipos === 7) {
        return Equipos7(nombresEquipo, fechaInicio, categoria);
    }
    if(totalEquipos === 8) {
        return Equipos8(nombresEquipo, fechaInicio, categoria);
    }
    if(totalEquipos === 9) {
        return Equipos9(nombresEquipo, fechaInicio, categoria);
    }
    if(totalEquipos === 10) {
        return Equipos10(nombresEquipo, fechaInicio, categoria);
    }
}

const Equipos4 = (nombresEquipo, fechInicio, categoria) => {

    calendarioObj = {
        categoria: categoria,
        calendario: {
            j1:[
                null,
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                }
            ],
            j2:[
                null,
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                }
            ],
            j3:[
                null,
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j4:[
                null,
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                }
            ],
            j5:[
                null,
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                }
            ],
            j6:[
                null,
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ]
        }
    }

    return calendarioObj
}

const Equipos5 = (nombresEquipo, fechInicio, categoria) => {

    calendarioObj = {
        categoria: categoria,
        calendario: {
            j1:[
                nombresEquipo[3],
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                }
            ],
            j2:[
                nombresEquipo[1],
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                }
            ],
            j3:[
                nombresEquipo[4],
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j4:[
                nombresEquipo[2],
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j5:[
                nombresEquipo[0],
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                }
            ],
            j6:[
                nombresEquipo[3],
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                }
            ],
            j7:[
                nombresEquipo[1],
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                }
            ],
            j8:[
                nombresEquipo[4],
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ],
            j9:[
                nombresEquipo[2],
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ],
            j10:[
                nombresEquipo[0],
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                }
            ],
        }
    }

    return calendarioObj
}

const Equipos6 = (nombresEquipo, fechInicio, categoria) => {

    calendarioObj = {
        categoria: categoria,
        calendario: {
            j1:[
                null,
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                }
            ],
            j2:[
                null,
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                }
            ],
            j3:[
                null,
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                }
            ],
            j4:[
                null,
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                }
            ],
            j5:[
                null,
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j6:[
                null,
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                }
            ],
            j7:[
                null,
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                }
            ],
            j8:[
                null,
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                }
            ],
            j9:[
                null,
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                }
            ],
            j10:[
                null,
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ]
        }
    }

    return calendarioObj
}

const Equipos7 = (nombresEquipo, fechInicio, categoria) => {

    calendarioObj = {
        categoria: categoria,
        calendario: {
            j1:[
                nombresEquipo[4],
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                }
            ],
            j2:[
                nombresEquipo[1],
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                }
            ],
            j3:[
                nombresEquipo[5],
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                }
            ],
            j4:[
                nombresEquipo[2],
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                }
            ],
            j5:[
                nombresEquipo[6],
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j6:[
                nombresEquipo[3],
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j7:[
                nombresEquipo[0],
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                }
            ],
            j8:[
                nombresEquipo[4],
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                }
            ],
            j9:[
                nombresEquipo[1],
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                }
            ],
            j10:[
                nombresEquipo[5],
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                }
            ],
            j11:[
                nombresEquipo[2],
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                }
            ],
            j12:[
                nombresEquipo[6],
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ],
            j13:[
                nombresEquipo[3],
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ],
            j14:[
                nombresEquipo[0],
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                }
            ],
        }
    }

    return calendarioObj
}

const Equipos8 = (nombresEquipo, fechInicio, categoria) => {

    calendarioObj = {
        categoria: categoria,
        calendario: {
            j1:[
                null,
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                }
            ],
            j2:[
                null,
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                }
            ],
            j3:[
                null,
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                }
            ],
            j4:[
                null,
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                }
            ],
            j5:[
                null,
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[6], 
                    'ida_vuelta': 'i'
                }
            ],
            j6:[
                null,
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                }
            ],
            j7:[
                null,
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j8:[
                null,
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                }
            ],
            j9:[
                null,
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                }
            ],
            j10:[
                null,
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                }
            ],
            j11:[
                null,
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                }
            ],
            j12:[
                null,
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[6], 
                    'ida_vuelta': 'v'
                }
            ],
            j13:[
                null,
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                }
            ],
            j14:[
                null,
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ]
        }
    }

    return calendarioObj
}


const Equipos9 = (nombresEquipo, fechInicio, categoria) => {

    calendarioObj = {
        categoria: categoria,
        calendario: {
            j1:[
                nombresEquipo[5],
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                }
            ],
            j2:[
                nombresEquipo[1],
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                }
            ],
            j3:[
                nombresEquipo[6],
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                }
            ],
            j4:[
                nombresEquipo[2],
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                }
            ],
            j5:[
                nombresEquipo[7],
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[6], 
                    'ida_vuelta': 'i'
                }
            ],
            j6:[
                nombresEquipo[3],
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[7], 
                    'ida_vuelta': 'i'
                }
            ],
            j7:[
                nombresEquipo[8],
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j8:[
                nombresEquipo[4],
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j9:[
                nombresEquipo[0],
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                }
            ],
            j10:[
                nombresEquipo[5],
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                }
            ],
            j11:[
                nombresEquipo[1],
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                }
            ],
            j12:[
                nombresEquipo[6],
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                }
            ],
            j13:[
                nombresEquipo[2],
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                }
            ],
            j14:[
                nombresEquipo[7],
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[6], 
                    'ida_vuelta': 'v'
                }
            ],
            j15:[
                nombresEquipo[3],
                {
                    'dia_partido': fechInicio.add(98, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(98, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(98, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(98, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[7], 
                    'ida_vuelta': 'v'
                }
            ],
            j16:[
                nombresEquipo[8],
                {
                    'dia_partido': fechInicio.add(105, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(105, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(105, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(105, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ],
            j17:[
                nombresEquipo[4],
                {
                    'dia_partido': fechInicio.add(112, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(112, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(112, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(112, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ],
            j18:[
                nombresEquipo[0],
                {
                    'dia_partido': fechInicio.add(119, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(119, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(119, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(119, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                }
            ]
        }
    }

    return calendarioObj
}

const Equipos10 = (nombresEquipo, fechInicio, categoria) => {

    calendarioObj = {
        categoria: categoria,
        calendario: {
            j1:[
                null,
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                }
            ],
            j2:[
                null,
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(7, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                }
            ],
            j3:[
                null,
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(14, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                }
            ],
            j4:[
                null,
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[6], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(21, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j5:[
                null,
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[6], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(28, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                }
            ],
            j6:[
                null,
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[6], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(35, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[7], 
                    'ida_vuelta': 'i'
                }
            ],
            j7:[
                null,
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(42, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[7], 
                    'ida_vuelta': 'i'
                }
            ],
            j8:[
                null,
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(49, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                }
            ],
            j9:[
                null,
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[8], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(56, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                }
            ],
            j10:[
                null,
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(63, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'i'
                }
            ],
            j11:[
                null,
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'i'
                },
                {
                    'dia_partido': fechInicio.add(70, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'i'
                }
            ],
            j12:[
                null,
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[1],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(77, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                }
            ],
            j13:[
                null,
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[2],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(84, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                }
            ],
            j14:[
                null,
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(91, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                }
            ],
            j15:[
                null,
                {
                    'dia_partido': fechInicio.add(98, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(98, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[6], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(98, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[3],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(98, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ],
            j16:[
                null,
                {
                    'dia_partido': fechInicio.add(105, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[6], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(105, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[5], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(105, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(105, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                }
            ],
            j17:[
                null,
                {
                    'dia_partido': fechInicio.add(112, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(112, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(112, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[6], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(112, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[7], 
                    'ida_vuelta': 'v'
                }
            ],
            j18:[
                null,
                {
                    'dia_partido': fechInicio.add(119, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(119, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(119, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(119, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[7], 
                    'ida_vuelta': 'v'
                }
            ],
            j19:[
                null,
                {
                    'dia_partido': fechInicio.add(126, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(126, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[4],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(126, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(126, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                }
            ],
            j20:[
                null,
                {
                    'dia_partido': fechInicio.add(133, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(133, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[8], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(133, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(133, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                }
            ],
            j21:[
                null,
                {
                    'dia_partido': fechInicio.add(140, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(140, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(140, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(140, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[5],
                    'equipo_2': nombresEquipo[4], 
                    'ida_vuelta': 'v'
                }
            ],
            j22:[
                null,
                {
                    'dia_partido': fechInicio.add(147, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '5:00 pm',
                    'equipo_1': nombresEquipo[6],
                    'equipo_2': nombresEquipo[3], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(147, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '6:00 pm',
                    'equipo_1': nombresEquipo[7],
                    'equipo_2': nombresEquipo[2], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(147, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '7:00 pm',
                    'equipo_1': nombresEquipo[8],
                    'equipo_2': nombresEquipo[1], 
                    'ida_vuelta': 'v'
                },
                {
                    'dia_partido': fechInicio.add(147, 'day').format('YYYY-MM-DD'), 
                    'hora_partido': '8:00 pm',
                    'equipo_1': nombresEquipo[9],
                    'equipo_2': nombresEquipo[0], 
                    'ida_vuelta': 'v'
                }
            ]
        }
    }

    return calendarioObj
}

module.exports = { Fixture };