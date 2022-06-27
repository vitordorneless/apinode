const jwt = require('jsonwebtoken');
const config = require('../config/config');

const auth = (req, res, next) => {
    const token_header = req.headers.auth;
    if(!token_header) return res.status(401).send({
        error: 'token não enviado'
    });

    jwt.verify(token_header, config.bd_pass, (err, decoded) => {
        if(err) return res.status(401).send({
            error: 'token inválido'
        });
        res.locals.auth_data = decoded;
        return next();
    });    
}

module.exports = auth;