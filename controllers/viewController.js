const express = require('express');
const views = express.Router();
const { getAllViews } = require('../queries/views')

// INDEX
views.get('/', async (req, res) => {
    const allViews = await getAllViews();
    if(allViews[0]){
        res.status(200).json(allViews);
    }else{
        res.status(500).json({ error: 'server error'});
    }
});

module.exports = views;