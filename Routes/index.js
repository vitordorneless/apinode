const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, (req, res) => {
    return res.send({
        message: 'tudo beleza com o get da raiz'
    });    
});

router.post('/', auth, (req, res) => {
    return res.send({
        message: 'tudo beleza com o post da raiz'
    });    
});

module.exports = router;