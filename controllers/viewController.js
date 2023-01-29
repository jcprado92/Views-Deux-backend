const express = require('express');
const views = express.Router();

// INDEX
views.get('/', (req, res) => {
    res.json({status: 'ok'})
});

module.exports = views;