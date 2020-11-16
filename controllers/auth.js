const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async(req, res = response) => {
    const { user_name, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ user_name });

        if(usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con el mismo nombre'
            }); 
        }

        usuario = new Usuario(req.body); 
        
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        //Si todo sale bien genera JWT
        const token = await generarJWT(usuario.id, usuario.user_name);

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            user_name: usuario.user_name,
            token,
            msg: 'Usuario creado exitosamente'
        }); 
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
    
}

const loginUsuario = async (req, res = response) => {
    //Desestructurando el body de la request
    const { user_name, password } = req.body

    try {
        const usuario = await Usuario.findOne({ user_name });

        if(!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario que ingresaste no existe'
            })
        }

        //Confirmando password
        //compara el pass del usuario que ingreso el usuario con el de la BD y regresa un bool
        const validPassword = bcrypt.compareSync(password, usuario.password);
        
        if(!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            })
        }

        //Si todo sale bien genera JWT
        const token = await generarJWT(usuario.id, usuario.user_name);

        return res.json({
            ok: true,
            uid: usuario.id,
            user_name: usuario.user_name,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Porfavor hable con el administrador',
        })
    }
}

const revalidarToken = async (req, res = response) => {

    const { uid, user_name } = req;

    const token = await generarJWT(uid, user_name);

    res.json({
        ok: true,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}