const { validationResult } = require('express-validator');

const validarFormulari = ( req, res, next ) => {

    const errors = validationResult(req);
    if ( !errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}


const authUser = (req, res, next) => {
    const { user, pass } = req.headers;
    const { USER, PASS } = process.env;

    if(user !== USER || pass !== PASS) {
        res.status(401).json({
            status:"Error", 
            msg:"Usuari i/o contrasenya incorrectes"
        });
        return;
    }
    next();
}

const noCacheControl = (req, res, next) => {
    res.set('Cache-control', 'no-cache'); 
    next();
}

module.exports = {
  validarFormulari,
    authUser,
    noCacheControl
}